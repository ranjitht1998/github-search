import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  //Get inital users(testing purpose)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`https://api.github.com/users`);

    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  //Set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
