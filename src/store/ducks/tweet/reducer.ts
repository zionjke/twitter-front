import {LoadingState, TweetDataStateType, } from "./types";
import produce, {Draft} from "immer";
import {TweetDataActions, TweetDataActionsType} from "./actionCreators";


export const initialTweetDataState: TweetDataStateType = {
    data: undefined,
    loadingState: LoadingState.NEVER
}

export const tweetDataReducer = produce((draft: Draft<TweetDataStateType>, action: TweetDataActions) => {
    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TweetDataActionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;
        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
    }

}, initialTweetDataState)
