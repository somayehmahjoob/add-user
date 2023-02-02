import React,{useState} from 'react';
import './App.css';

import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';

function App() {
  const [usersList,setUsersList] = useState([]);


  const addUserHandler = (uName,uAge) => {
    setUsersList((pervUserList)=> {
      return [...pervUserList , {id:Math.random().toString(), name:uName , age:uAge}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
