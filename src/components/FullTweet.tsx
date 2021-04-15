import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetDataLoading, selectTweetData} from '../store/ducks/tweet/selectors';
import {useHomeStyles} from "../pages/Home/theme";
import {Tweet} from "./Tweet";
import CircularProgress from "@material-ui/core/CircularProgress";


type Props = {};

export const FullTweet: React.FC<Props> = ({}: Props): React.ReactElement | null => {
    const dispatch = useDispatch()
    const params: { id: string } = useParams();
    const id = params.id
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetDataLoading)
    const classes = useHomeStyles()

    useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id))
        }
        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress/>
            </div>
        )
    }

    if (tweetData) {
        return (
            <Tweet classes={classes} id={id} {...tweetData}/>
        )
    }

    return null

};
