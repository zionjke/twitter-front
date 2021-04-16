import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./rootReducer";
import rootSaga from "./saga";
import {TweetsStateType} from "./ducks/tweets/types/types";
import {TagsStateType} from "./ducks/tags/types/types";
import {TweetDataStateType} from "./ducks/tweet/types/types";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export type RootStateType = {
    tweets: TweetsStateType
    tags: TagsStateType,
    tweet:TweetDataStateType
}

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
