export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}


export type TagType = {
    _id: string
    name: string
    count: number
}

export type TagsStateType = {
    items: Array<TagType>
    loadingState: LoadingState
}
