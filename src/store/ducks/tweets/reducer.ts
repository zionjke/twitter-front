import produce, {Draft} from "immer";
import {LoadingState, TweetsStateType} from "./types";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

export const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break;
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED
            break;
        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case TweetsActionsType.ADD_TWEET:
            draft.items.push(action.payload)
            break;
    }

}, initialTweetsState)
