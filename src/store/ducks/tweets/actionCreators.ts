import {
    AddTweetActionInterface,
    FetchAddTweetActionInterface,
    FetchTweetsActionInterface, SetAddTweetFormStateActionInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingStateInterface,
    TweetsActionsType
} from "./types/actionTypes";
import {AddFormState, LoadingState, TweetType} from "./types/types";


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

export const setAddFormState = (payload: AddFormState): SetAddTweetFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
})


