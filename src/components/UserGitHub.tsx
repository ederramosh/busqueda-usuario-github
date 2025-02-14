import { useGetInfo } from "../hooks/useGetInfo";
import moment from 'moment';


interface userGitHubProps {
  gitHubUser: string;
}

export const UserGitHub = ({ gitHubUser }: userGitHubProps) => {
  const userInfo = useGetInfo(gitHubUser);

  {if(!userInfo.name) return <section className="text-center"><h5>Realice una busqueda de algun usuario</h5></section>}

  return (
    <>
      <div className="card">
        {
          userInfo.avatar_url &&
        <img
          src={userInfo.avatar_url}
          className="rounded mx-auto d-block card-img-top"
          alt="..."
          style={{ width: "18rem" }}
        />
        }
        <div className="card-body text-center">
          <h5 className="card-title">{userInfo.name}</h5>
          <p className="card-text">
            {userInfo.bio}
          </p>
        </div>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">
            <strong>Creado: </strong>
            {moment(userInfo.created_at).format("D [de] MMMM [de] YYYY")}
          </li>
          <li className="list-group-item">
            <strong>Usuario:</strong> {userInfo.login}
          </li>
          <li className="list-group-item">
            <strong>Repositorios:</strong> {userInfo.public_repos}
          </li>
        </ul>
        <div className="card-body text-center">
          <a href={userInfo.html_url} className="card-link" target="_blank">
            {userInfo.html_url}
          </a>
        </div>
      </div>
    </>
  );
};
