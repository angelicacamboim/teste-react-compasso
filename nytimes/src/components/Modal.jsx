import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: 'transparent'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  Backdrop: {
    backgroundColor: 'transparent'
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (

    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


const TransitionsModal = ({open, close, post}) => {

  return (
    <Dialog onClose={close} aria-labelledby="customized-dialog-title" open={open} BackdropProps={{style: {backgroundColor: 'rgba(0,0,0,0.1)'}}}>
      <DialogTitle id="customized-dialog-title" onClose={close} >
        {post.title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="subtitle1">
          {post.abstract}
        </Typography>
        <Typography gutterBottom variant="overline" display="block">
          <a target="blank" href={post.short_url}>{post.short_url}</a>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default TransitionsModal
