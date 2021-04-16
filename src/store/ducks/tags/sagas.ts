import {setTags, setTagsLoadingState} from "./actionCreators";
import {call, put, takeEvery} from "redux-saga/effects";
import {tagsApi} from "../../../services/api/tagsApi";
import {LoadingState, TagType} from "./types/types";
import {TagsActionsType} from "./types/actionTypes";

export function* fetchTagsRequest() {
    try {
        const data:Array<TagType> = yield call(tagsApi.fetchTags);
        yield put(setTags(data))
    } catch  {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}


export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
