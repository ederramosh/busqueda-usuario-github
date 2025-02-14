import { gitHubUserInfo } from "./userInformation";

export const getUserAPI = async (gitHubUser: string):Promise<gitHubUserInfo> => {

    const url = `https://api.github.com/users/${gitHubUser}`;
    const result = await fetch(url);
    const data = await result.json();

    const gitHubUserInfo: gitHubUserInfo = {
        name: data.name,
        login: data.login,
        bio: data.bio,
        created_at: data.created_at,
        html_url: data.html_url,
        public_repos: data.public_repos,
        avatar_url: data.avatar_url,
    }
    
    return gitHubUserInfo;
}