import { TweetType } from "../../tweets/types/types";

export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}


export type TweetDataStateType = {
    data: TweetType | undefined
    loadingState: LoadingState
}

