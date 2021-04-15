import {LoadingState, TweetDataStateType,} from "./types";
import {Action} from "redux";


export enum TweetDataActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload: TweetDataStateType['data']
}


export interface SetTweetDataLoadingStateInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export interface FetchTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload: string
}


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


export type TweetDataActions = SetTweetDataActionInterface
    | FetchTweetDataActionInterface
    | SetTweetDataLoadingStateInterface
