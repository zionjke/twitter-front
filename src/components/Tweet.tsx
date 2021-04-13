import React from 'react';
import classNames from "classnames";
import {Avatar, Badge, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ReplyIcon from "@material-ui/icons/ReplyOutlined";
import {useHomeStyles} from "../pages/Home";


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
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={"outlined"}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${user.userName}`}
                            src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetUserName}> @{user.userName}</span>
                       <span className={classes.tweetUserName}> &#8226;</span>
                        <span className={classes.tweetUserName}> 1ч</span>
                    </Typography>
                    <Typography variant={"body1"}>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <IconButton>
                            <Badge color={"primary"} badgeContent={1}>
                                <CommentIcon style={{fontSize: 20}}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <RepeatIcon style={{fontSize: 20}}/>
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{fontSize: 20}}/>
                        </IconButton>
                        <IconButton>
                            <ReplyIcon style={{fontSize: 20}}/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};
