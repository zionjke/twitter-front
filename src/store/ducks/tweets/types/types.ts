export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}

export enum AddFormState {
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING'
}


export type TweetType = {
    _id:string
    text: string
    user: UserType
}

export type UserType = {
    fullname: string
    userName: string
    avatarUrl: string
}

export type TweetsStateType = {
    items: Array<TweetType>
    loadingState: LoadingState,
    addFormState: AddFormState
}

