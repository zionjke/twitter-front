import axios from "axios";
import {TweetType} from "../../store/ducks/tweets/types";


export const tweetsApi = {
    fetchTweets(): Promise<Array<TweetType>> {
        return axios.get('/tweets').then(({data}) => data)
    },
    fetchTweetData(id:string): Promise<TweetType[]> {
        return axios.get(`/tweets?_id=${id}`).then(({data}) => data)
    }
}
