import {call, put, takeEvery} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreators";
import {tweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./types";

export function* fetchTweetsRequest() {
    try {
        // @ts-ignore
        const data = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch  {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
