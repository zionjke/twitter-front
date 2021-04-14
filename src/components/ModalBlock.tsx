import React from 'react';
import {
    Dialog, DialogContent,
    DialogTitle,
    IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type Props = {
    title?: string
    children: React.ReactNode
    visible:boolean
    onClose: () => void
};


export const ModalBlock: React.FC<Props> = (props):React.ReactElement => {
    return (
        <Dialog open={props.visible} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={props.onClose} color={"secondary"}>
                    <CloseIcon style={{fontSize: 26}} color={"primary"}/>
                </IconButton>
                {props.title}
            </DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>
        </Dialog>
    );
};
