import produce, {Draft} from "immer";
import {AddFormState, LoadingState, TweetsStateType} from "./types/types";
import {TweetsActions, TweetsActionsType} from "./types/actionTypes";


export const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingState.NEVER,
    addFormState: AddFormState.NEVER
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
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING
            break;
        case TweetsActionsType.ADD_TWEET:
            draft.items = [action.payload, ...draft.items]
            // TODO: Подумать какой статус выбрать если твит был добавлен
            draft.addFormState = AddFormState.NEVER
            break;
        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload
            break;
        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;
    }

}, initialTweetsState)
