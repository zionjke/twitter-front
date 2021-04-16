import {Action} from "redux";
import {LoadingState, TagType} from "./types";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS
    payload: Array<TagType>
}

export interface SetTagsLoadingStateInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS
}

export type TagsActions = SetTagsActionInterface
    | SetTagsLoadingStateInterface
    | FetchTagsActionInterface
