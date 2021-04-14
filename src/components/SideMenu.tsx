import React from 'react';
import {Button, Grid, Hidden, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import CreateIcon from '@material-ui/icons/CreateOutlined';
import {useHomeStyles} from "../pages/Home/theme";
import {ModalBlock} from "./ModalBlock";
import {AddTweetForm} from "./ AddTweetForm";


type Props = {
    classes: ReturnType<typeof useHomeStyles>
};
export const SideMenu: React.FC<Props> = ({classes}: Props): React.ReactElement => {
    const [visibleModal,setVisibleModal] = React.useState<boolean>(false)

    const handleClickOpenAddTweetModal = (): void => {
        setVisibleModal(true)
    }


    const handleCloseAddTweetModal = (): void => {
        setVisibleModal(false);
    };

    return (
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <IconButton className={classes.logo} color={"primary"}>
                        <TwitterIcon className={classes.logoIcon}/>
                    </IconButton>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Поиск
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Уведомления
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <EmailIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Сообщения
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Закладки
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Список
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <UserIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>
                                Профиль
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button className={classes.sideMenuTweetButton}
                            onClick={handleClickOpenAddTweetModal}
                            variant={"contained"}
                            color={"primary"}
                            fullWidth>
                        <Hidden smDown>
                            Твитнуть
                        </Hidden>
                        <Hidden mdUp>
                            <CreateIcon/>
                        </Hidden>
                    </Button>
                </li>
                <ModalBlock visible={visibleModal}
                            onClose={handleCloseAddTweetModal}>
                    <div style={{width:550}}>
                        <AddTweetForm maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </ul>
    );
};
