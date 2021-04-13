import React from 'react';
import {
    Container, createStyles,
    Grid,
    IconButton, InputBase,
    makeStyles, Paper, Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: "none",
        width: 230,
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29,161,242,0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            padding: '0 25px 0 20px',
            transition: 'background-color 0.15s ease-in-out'
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 30,
        marginLeft: -5
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop:30
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        padding: 10,
        borderRadius: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        paddingTop: 15,
        paddingLeft: 15,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -10,
        width: 450,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    tweetUserName: {
        color: grey["500"]
    }
}))

const SearchTextField = withStyles((theme) =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 15
        }
    }),
)(InputBase);

type Props = {};
export const Home = (props: Props) => {
    const classes = useHomeStyles()
    return (
        <Container className={classes.wrapper} maxWidth={"lg"}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"}>
                            <Typography variant={"h6"}>Главная</Typography>
                        </Paper>
                        <Tweet text={'Привет как дела?'}
                               classes={classes}
                               user={{
                                   fullname: 'Artem V',
                                   userName: 'zionjkee',
                                   avatarUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80'
                               }}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField placeholder={'Поиск по твиттеру'} fullWidth/>
                </Grid>
            </Grid>
        </Container>
    );
};
