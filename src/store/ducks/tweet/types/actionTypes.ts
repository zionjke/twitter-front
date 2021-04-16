import {Action} from "redux";
import {LoadingState, TweetDataStateType} from "./types";

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


export type TweetDataActions = SetTweetDataActionInterface
    | FetchTweetDataActionInterface
    | SetTweetDataLoadingStateInterface
