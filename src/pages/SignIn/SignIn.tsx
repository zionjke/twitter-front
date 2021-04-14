import React from 'react';
import {Typography, Button, TextField, DialogActions} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import UsersIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {useSignInStyles} from "./theme";
import {ModalBlock} from "../../components/ModalBlock";


type Props = {};


export const SignIn: React.FC<Props> = (props: Props): React.ReactElement => {
    const classes = useSignInStyles()
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
