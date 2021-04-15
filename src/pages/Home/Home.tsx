import React, {useEffect} from 'react';
import {
    Avatar,
    Button,
    Container,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";
import CircularProgress from '@material-ui/core/CircularProgress'
import {AddTweetForm} from "../../components/ AddTweetForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from '../../store/ducks/tweets/selectors';
import {Tags} from "../../components/Tags";
import {Route} from "react-router-dom";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "../../components/FullTweet";




type Props = {};
export const Home: React.FC<Props> = ({}: Props): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const tweets = useSelector(selectTweetsItems)
    const isTweetsLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
    }, [])

    return (
        <Container className={classes.wrapper} maxWidth={"lg"}>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"}>

                            <Route  path={'/home/:any'}>
                                <BackButton classes={classes}/>
                            </Route>

                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant="h6">Твиты</Typography>
                            </Route>

                            <Route  path={'/home/tweet/'}>
                                <Typography variant={"h6"}>Твитнуть</Typography>
                            </Route>

                        </Paper>

                        <Route exact path={['/home', '/home/search']}>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}></div>
                            </Paper>
                        </Route>

                        <Route  path='/home' exact>
                            {
                                isTweetsLoading
                                    ? <div className={classes.tweetsCentred}>
                                        <CircularProgress/>
                                    </div>
                                    : tweets.map(tweet => (
                                        <Tweet key={tweet._id}
                                               id={tweet._id}
                                               text={tweet.text}
                                               classes={classes}
                                               user={tweet.user}/>
                                    ))
                            }
                        </Route>

                        <Route exact path='/home/tweet/:id' component={FullTweet}/>

                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                       <Tags classes={classes}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
};
