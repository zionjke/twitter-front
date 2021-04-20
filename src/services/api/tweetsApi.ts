import { axios } from "../../core/axios";
import {TweetType} from "../../store/ducks/tweets/types/types";


type ResponseTweetsType<T> = {
    status: string
    data: T
}

export const tweetsApi = {
    async fetchTweets(): Promise<TweetType[]> {
        const {data} = await axios.get<ResponseTweetsType<TweetType[]>>('/tweets');
        return data.data;
    },
    async fetchTweetData(id: string): Promise<TweetType> {
        const {data} = await axios.get<ResponseTweetsType<TweetType>>(`/tweets/${id}`);
        return data.data;
    },
    async addTweet(payload: string): Promise<TweetType> {
        const {data} = await axios.post<ResponseTweetsType<TweetType>>(`/tweets`, {text: payload});
        return data.data;
    }
}
