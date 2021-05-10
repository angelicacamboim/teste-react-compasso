import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const TransitionsModal = ({open, close, post}) => {

  return (

    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={close}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description" 
  >
    <DialogTitle id="alert-dialog-slide-title">{post.title}</DialogTitle>
    <DialogContent >
      <DialogContentText id="alert-dialog-slide-description">
        {post.abstract}
      </DialogContentText>
      <DialogContentText id="alert-dialog-slide-description">
        <a href={post.url} target="blank" >{post.short_url}</a>
      </DialogContentText>
    </DialogContent>

  </Dialog>

  );
}

export default TransitionsModal
