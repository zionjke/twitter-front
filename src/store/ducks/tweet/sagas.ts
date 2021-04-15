import {call, put, takeEvery} from "redux-saga/effects";
import {TweetType} from "../tweets/types";
import {
    FetchTweetDataActionInterface,
    setTweetData,
    setTweetDataLoadingState,
    TweetDataActionsType
} from "./actionCreators";
import {LoadingState} from "./types";
import {tweetsApi} from "../../../services/api/tweetsApi";


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: TweetType[] = yield call(tweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data[0]))
    } catch {
        yield put(setTweetDataLoadingState(LoadingState.ERROR))
    }
}


export function* tweetDataSaga() {
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}
