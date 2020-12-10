import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DialogConfirm = (props) => {
    let [open, setOpen] = useState(false);

    const handleClose = (flag) => {
        setOpen(false);
        props.flag(flag)
    };

    return (
        <Fragment>
            <Dialog
                open={true}
                onClose={handleClose}
            >
                <DialogTitle>{props.title ? props.title : "Are you sure want to delete this item?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.description ? props.description : null}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(true)} color="primary" autoFocus>Yes</Button>
                    <Button onClick={() => handleClose(false)} color="primary">No</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default DialogConfirm
