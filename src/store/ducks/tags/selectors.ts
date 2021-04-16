import {RootStateType} from "../../store";
import {LoadingState, TagsStateType,} from "./types/types";


export const tagsState = (state: RootStateType): TagsStateType => state.tags

export const selectTagsItems = (state: RootStateType) => tagsState(state).items

export const selectTagsLoadingState = (state: RootStateType): LoadingState =>
    tagsState(state).loadingState
export const selectIsTagsLoading = (state: RootStateType): boolean =>
    tagsState(state).loadingState === LoadingState.LOADING
export const selectIsTagsLoaded = (state: RootStateType): boolean =>
    tagsState(state).loadingState === LoadingState.LOADED


