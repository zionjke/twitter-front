import React from 'react';
import {Divider, ListItem, ListItemText, Typography} from "@material-ui/core";
import {useHomeStyles} from "../pages/Home/theme";
import { Link } from 'react-router-dom';

type Props = {
    name: string
    count: number
    classes: ReturnType<typeof useHomeStyles>
};

export const Tag: React.FC<Props> = ({classes, name, count}: Props): React.ReactElement => {
    return (
        <>
            <ListItem className={classes.rightSideBlockItem}>
                <Link to={`/home/search?q=${name}`}>
                    <ListItemText
                        primary={name}
                        secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                                Твитов: {count}
                            </Typography>
                        }
                    />
                </Link>
            </ListItem>
            <Divider component="li"/>
        </>
    );
};
