import axios from "axios";
import {TagType} from "../../store/ducks/tags/types/types";


export const tagsApi = {
    fetchTags(): Promise<Array<TagType>> {
        return axios.get('/tags').then(({data}) => data)
    }
}
