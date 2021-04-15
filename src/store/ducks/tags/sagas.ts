import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {call, put, takeEvery} from "redux-saga/effects";
import {tagsApi} from "../../../services/api/tagsApi";
import {LoadingState, TagType} from "./types";

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
