import React from 'react';
import {
    makeStyles,
    Typography,
    Button, TextField, DialogActions
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import UsersIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {ModalBlock} from '../components/ModalBlock';


type Props = {};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '350%',
        height: '350%'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    blueSideListInfoIcon: {
        fontSize: 30,
        marginRight: 10
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',

    },
    loginSideIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 40,
        marginTop: 20
    },
    loginSideField: {
        marginBottom: 18
    },
    registerSideField: {
        marginBottom: theme.spacing(5)
    }
}))

export const SignIn: React.FC<Props> = (props: Props): React.ReactElement => {
    const classes = useStyles()
    const [visibleModal, setVisibleModal] = React.useState<'register' | 'signIn'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenRegistration = (): void => {
        setVisibleModal('register')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon color={"primary"} className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <SearchIcon className={classes.blueSideListInfoIcon}/>
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <UsersIcon className={classes.blueSideListInfoIcon}/>
                            Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <MessageIcon className={classes.blueSideListInfoIcon}/>
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color={"primary"} className={classes.loginSideIcon}/>
                    <Typography className={classes.loginSideTitle} variant={"h4"}>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography style={{marginBottom: 15}}>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <Button onClick={handleClickOpenRegistration}
                            style={{marginBottom: 20}}
                            variant={'contained'}
                            color={'primary'} fullWidth>
                        Зарегистрироватся
                    </Button>
                    <Button onClick={handleClickOpenSignIn}
                            variant={'outlined'}
                            color={'primary'}
                            fullWidth>
                        Войти
                    </Button>
                    <ModalBlock visible={visibleModal === 'signIn'}
                                onClose={handleCloseModal}
                                title={'Войти в аккаунт'}>
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            id="email"
                            label="E-mail"
                            type="email"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            type="password"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                        />
                        <DialogActions>
                            <Button onClick={handleCloseModal} variant={"contained"} color="primary" fullWidth>
                                Войти
                            </Button>
                        </DialogActions>
                    </ModalBlock>
                    <ModalBlock visible={visibleModal === 'register'}
                                onClose={handleCloseModal}
                                title={'Создайте учетную запись'}>
                        <TextField
                            className={classes.registerSideField}
                            autoFocus
                            id="name"
                            label="Имя"
                            type="text"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                        />
                        <TextField
                            className={classes.registerSideField}
                            autoFocus
                            id="email"
                            label="E-mail"
                            type="email"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                        />
                        <TextField
                            className={classes.registerSideField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            type="password"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                        />
                        <DialogActions>
                            <Button onClick={handleCloseModal} variant={"contained"} color="primary" fullWidth>
                                Зарегистрироватся
                            </Button>
                        </DialogActions>
                    </ModalBlock>
                </div>
            </div>
        </div>
    );
};
