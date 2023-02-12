import React from 'react';
import ReactDOM  from 'react-dom';
import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};
const ModalOverley = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        {props.title}
      </div>
      <div className={classes.content}>
        {props.message}
      </div>
      <div className={classes.actions}>
        <Button type='submit' onClick={props.onConfirm}>Okay</Button>
      </div>
    </Card>
  )
};

const ErrorModal = (props) => {  
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverley title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overly-root'))}
      
    </>
  )
}

export default ErrorModal