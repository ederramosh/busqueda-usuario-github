import { useEffect, useState } from 'react'
import { getUserAPI } from '../helper/getUserAPI';
import { gitHubUserInfo } from '../helper/userInformation';

export const useGetInfo = (gitHubUser: string) => {
    
    const [userInfo, setUserInfo] = useState<gitHubUserInfo>({
        name: "",
        login: "",
        bio: "",
        created_at: "",
        html_url: "",
        public_repos: 0,
        avatar_url: "",
    });

    const getDataFromAPI = async () => {
        const getInfo = await getUserAPI(gitHubUser);
        setUserInfo(getInfo);

    }

    useEffect(() => {
      getDataFromAPI();
    }, [gitHubUser]);
    
    return userInfo;
}
