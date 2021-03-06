import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Layout/Spinner";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:girld-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 mb:mb-0">
            <div className="rounded-lg shadow-xl caed image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="tex-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="2-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="state">
                  <div className="stat-title text-md">Location</div>
                  <text-lg className="stat-value">{location}</text-lg>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
