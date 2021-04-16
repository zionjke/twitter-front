import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetDataLoading, selectTweetData} from '../store/ducks/tweet/selectors';
import {useHomeStyles} from "../pages/Home/theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Avatar, Badge, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";


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
        const {user, text} = tweetData
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
                            <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {text}
                </Typography>
            </Paper>
        )
    }

    return null

};
