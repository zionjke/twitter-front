import React from 'react';
import {Button, Grid, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import {useHomeStyles} from "../pages/Home";

type Props = {
    classes: ReturnType<typeof useHomeStyles>
};
export const SideMenu: React.FC<Props> = ({classes}: Props): React.ReactElement => {
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
                    <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel}
                                variant={"h6"}>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <EmailIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={"h6"}>Профиль</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth>
                    Твитнуть
                </Button>
            </li>
        </ul>
    );
};
