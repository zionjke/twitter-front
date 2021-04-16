import {call, put, takeEvery} from 'redux-saga/effects'
import {
    addTweet,
    setAddFormState,
    setTweets,
    setTweetsLoadingState,
} from "./actionCreators";
import {tweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState, TweetType} from "./types/types";
import { v1 } from 'uuid';
import {FetchAddTweetActionInterface, TweetsActionsType} from "./types/actionTypes";

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
        yield put(setAddFormState(AddFormState.ERROR))
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
