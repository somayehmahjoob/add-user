import React from 'react';
import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
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
    </>
  )
}

export default ErrorModal