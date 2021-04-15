import {tweetsReducer} from "./ducks/tweets/reducer";
import {combineReducers} from "redux";
import {tagsReducer} from "./ducks/tags/reducer";
import { tweetDataReducer } from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetDataReducer
})
