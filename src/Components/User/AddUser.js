import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

 const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername]= useState('');
  const [enteredAge, setEnteredAge]= useState('');
  // const [isValid, setIsValid]= useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername , enteredAge );

  }
  const usernameChangeHandler =(event) =>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='user'>Add User</label>
          <input id="user" type="text" onChange={usernameChangeHandler}/>
          <label htmlFor='age'>Age (year)</label>
          <input id="age" type="number" onChange={ageChangeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser