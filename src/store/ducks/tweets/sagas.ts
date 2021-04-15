import {call, put, takeEvery} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreators";
import {tweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, TweetType} from "./types";

export function* fetchTweetsRequest() {
    try {
        const data:Array<TweetType> = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch  {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
