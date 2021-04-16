import {Action} from "redux";
import {AddFormState, LoadingState, TweetType} from "./types";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_ADD_FORM_STATE = 'tweet/SET_ADD_FORM_STATE',
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

export interface SetAddTweetFormStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload: AddFormState
}


export type TweetsActions = SetTweetsActionInterface
    | FetchTweetsActionInterface
    | SetTweetsLoadingStateInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | SetAddTweetFormStateActionInterface
