import {call, put, takeEvery} from "redux-saga/effects";
import {TweetType} from "../tweets/types/types";
import {
    setTweetData,
    setTweetDataLoadingState,
} from "./actionCreators";
import {LoadingState} from "./types/types";
import {tweetsApi} from "../../../services/api/tweetsApi";
import {FetchTweetDataActionInterface, TweetDataActionsType} from "./types/actionTypes";


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: TweetType = yield call(tweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    } catch {
        yield put(setTweetDataLoadingState(LoadingState.ERROR))
    }
}


export function* tweetDataSaga() {
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}
