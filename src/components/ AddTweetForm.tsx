import React, {useEffect} from 'react';
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home/theme";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {fetchAddTweet} from "../store/ducks/tweets/actionCreators";

type Props = {
    classes: ReturnType<typeof useHomeStyles>
    maxRows?: number
};

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<Props> = ({classes, maxRows}: Props): React.ReactElement => {
    const dispatch = useDispatch()
    const [text, setText] = React.useState<string>('')
    const textLimitPercent = Math.round((text.length / 280) * 100)
    const textCount = MAX_LENGTH - text.length;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }


    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://scontent.fiev6-1.fna.fbcdn.net/v/t1.18169-9/19598681_1574642752605734_2353472045273651560_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=arwZtMzU_t4AX-mHexo&_nc_ht=scontent.fiev6-1.fna&oh=993fd67e3ee3256a3b2c2bac22567424&oe=609A7A03"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.addFormBottomActions)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress
                                    style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained">
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    );
};
