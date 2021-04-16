import {LoadingState, TagType} from "./types/types";
import {FetchTagsActionInterface, SetTagsActionInterface, SetTagsLoadingStateInterface, TagsActionsType} from "./types/actionTypes";



export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS
})

export const setTags = (payload: Array<TagType>): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
})

export const setTagsLoadingState = (payload:LoadingState): SetTagsLoadingStateInterface => ({
    type:TagsActionsType.SET_LOADING_STATE,
    payload
})


