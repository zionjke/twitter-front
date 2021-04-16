import {LoadingState, TweetDataStateType,} from "./types/types";
import {
    FetchTweetDataActionInterface,
    SetTweetDataActionInterface,
    SetTweetDataLoadingStateInterface,
    TweetDataActionsType
} from "./types/actionTypes";




export const fetchTweetData = (payload:string): FetchTweetDataActionInterface => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload
})

export const setTweetData = (payload: TweetDataStateType['data']): SetTweetDataActionInterface => ({
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload
})

export const setTweetDataLoadingState = (payload:LoadingState): SetTweetDataLoadingStateInterface => ({
    type:TweetDataActionsType.SET_LOADING_STATE,
    payload
})


