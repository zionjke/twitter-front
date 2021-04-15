import {RootStateType} from "../../store";
import {LoadingState, TweetDataStateType, } from "./types";



export const tweetDataState = (state: RootStateType): TweetDataStateType => state.tweet

export const selectTweetData = (state: RootStateType):TweetDataStateType['data'] => tweetDataState(state).data

export const selectTweetDataLoadingState = (state: RootStateType): LoadingState =>
    tweetDataState(state).loadingState
export const selectIsTweetDataLoading = (state: RootStateType): boolean =>
    tweetDataState(state).loadingState === LoadingState.LOADING
export const selectIsTweetDataLoaded = (state: RootStateType): boolean =>
    tweetDataState(state).loadingState === LoadingState.LOADED





