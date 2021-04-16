import {RootStateType} from "../../store";
import {AddFormState, LoadingState, TweetsStateType} from "./types/types";


export const tweetsState = (state: RootStateType): TweetsStateType => state.tweets

export const selectTweetsItems = (state: RootStateType) => tweetsState(state).items

export const selectTweetsLoadingState = (state: RootStateType): LoadingState =>
    tweetsState(state).loadingState
export const selectIsTweetsLoading = (state: RootStateType): boolean =>
    tweetsState(state).loadingState === LoadingState.LOADING
export const selectIsTweetsLoaded = (state: RootStateType): boolean =>
    tweetsState(state).loadingState === LoadingState.LOADED

export const selectAddFormState = (state: RootStateType): AddFormState =>
    tweetsState(state).addFormState
export const selectAddFormStateLoading = (state: RootStateType): boolean =>
    tweetsState(state).addFormState === AddFormState.LOADING



