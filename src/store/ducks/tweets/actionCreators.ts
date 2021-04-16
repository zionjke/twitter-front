import {LoadingState, TweetType} from "./types";
import {Action} from "redux";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: Array<TweetType>
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET,
    payload: TweetType
}

export interface SetTweetsLoadingStateInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS,
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload: string
}


export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweets = (payload: Array<TweetType>): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: TweetType): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
})


export type TweetsActions = SetTweetsActionInterface
    | FetchTweetsActionInterface
    | SetTweetsLoadingStateInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
