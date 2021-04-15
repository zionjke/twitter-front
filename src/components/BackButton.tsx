import React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowBackOutlined';
import {IconButton} from "@material-ui/core";
import {useHomeStyles} from "../pages/Home/theme";
import {useHistory} from 'react-router-dom';

type Props = {
    classes: ReturnType<typeof useHomeStyles>
};

export const BackButton: React.FC<Props> = ({classes}: Props): React.ReactElement => {
    const history = useHistory()
    const handleClickButton = (): void => {
        history.goBack()
    }
    return (
        <IconButton onClick={handleClickButton} className={classes.tweetsHeaderBackButton} color={"primary"}>
            <ArrowIcon/>
        </IconButton>
    );
};
