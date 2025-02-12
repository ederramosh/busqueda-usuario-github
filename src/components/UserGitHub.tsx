import { useGetInfo } from "../hooks/useGetInfo";

interface userGitHubProps {
    gitHubUser: string
}

export const UserGitHub = ({ gitHubUser }: userGitHubProps) => {

  const userInfo = useGetInfo(gitHubUser);

  return (
    <>
        <div>Aca va el resultado de usuarios</div>
        <ol>
            <li>
                { userInfo.name }
            </li>
            <li>
                { userInfo.login }
            </li>
        </ol>
    </>
  )
}
