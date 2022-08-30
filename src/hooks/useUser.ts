import useSWR from "swr";
import { fetcher } from "../utils/helpers";
import { User } from "../interface";

interface useUserProps {
    username: string;
}



/*
* A declarative reusable custom hook to get a user by usernane
* query parameter
* Returns the record data, loading and error state
* */
const useUser = ({ username } : useUserProps) => {

    const { data, error } = useSWR(`/api/user?username=${username}`, fetcher);

    return {
        data: data as User,
        loading: !error && !data,
        error: error
    }
};


export default useUser;