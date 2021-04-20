import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetDataLoading, selectTweetData} from '../store/ducks/tweet/selectors';
import {useHomeStyles} from "../pages/Home/theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Avatar, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import {format} from "date-fns";
import ruLang from "date-fns/locale/ru";


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
        const {user, text, createdAt} = tweetData
        return (
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                    />
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {text}
                </Typography>
                <Typography>
            <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} ·{' '}
            </span>
                    <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', {locale: ruLang})}
            </span>
                </Typography>

            </Paper>
        )
    }

    return null

};
