import axios from "axios";
import {TweetType} from "../../store/ducks/tweets/types";


export const tweetsApi = {
    fetchTweets(): Promise<Array<TweetType>> {
        return axios.get('https://trycode.pw/c/6330M.json').then(({data}) => data)
    }
}
