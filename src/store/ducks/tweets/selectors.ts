import {RootStateType} from "../../store";
import {LoadingState, TweetsStateType} from "./types";
import {createSelector} from "reselect";

export const tweetsState = (state: RootStateType): TweetsStateType => state.tweets

export const selectTweetsItems = (state: RootStateType) => tweetsState(state).items

export const selectTweetsLoadingState = (state: RootStateType): LoadingState =>
    tweetsState(state).loadingState
export const selectIsTweetsLoading = (state: RootStateType): boolean =>
    tweetsState(state).loadingState === LoadingState.LOADING
export const selectIsTweetsLoaded = (state: RootStateType): boolean =>
    tweetsState(state).loadingState === LoadingState.LOADED

// export const selectTweetsItems = createSelector(tweetsState, tweets => tweets.items)
