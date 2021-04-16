import {call, put, takeEvery} from 'redux-saga/effects'
import {
    addTweet,
    FetchAddTweetActionInterface,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {tweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, TweetType} from "./types";
import { v1 } from 'uuid';

export function* fetchTweetsRequest() {
    try {
        const data:Array<TweetType> = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch  {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload:text}:FetchAddTweetActionInterface) {
    try {
        const newTweet:TweetType = {
            _id: v1(),
            text: text,
            user: {
                fullname: "Test name",
                userName: "Test username",
                avatarUrl: "https://source.unsplash.com/random/100x100?1"
            }
        }
        const data:TweetType = yield call(tweetsApi.addTweet,newTweet)
        yield put(addTweet(data))
    } catch  {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
