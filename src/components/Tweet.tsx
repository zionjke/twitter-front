import React from 'react';
import classNames from "classnames";
import {Avatar, Badge, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import {useHomeStyles} from "../pages/Home/theme";


type Props = {
    classes: ReturnType<typeof useHomeStyles>
    text: string
    user: {
        fullname: string
        userName: string
        avatarUrl: string
    }
};


export const Tweet: React.FC<Props> = ({classes, user, text}: Props): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
            <Avatar
                className={classes.tweetAvatar}
                alt={`Аватарка пользователя ${user.fullname}`}
                src={user.avatarUrl}
            />
            <div>
                <Typography>
                    <b>{user.fullname}</b>&nbsp;
                    <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                    <span className={classes.tweetUserName}>·</span>&nbsp;
                    <span className={classes.tweetUserName}>1 ч</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton>
                            <Badge color={"primary"} badgeContent={1} >
                                <CommentIcon style={{ fontSize: 20 }} />
                            </Badge>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>

    );
};
