import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

// function AddUser () {}
const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length <= 0 && enteredUserAge.trim().length === 0){
            //console.log("invalid user Data");
            setError({
                title:'Invalid Input',
                message:'Please enter valid name and age',
            });
            return;
        
        }else if(+enteredUserAge < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter valid age (>0)',
            });
            return;
        }
        else{
        props.onAdduser(enteredUserName,enteredUserAge);
        console.log(enteredUserName, enteredUserAge);
        setEnteredUserAge('');
        setEnteredUserName("");
        }
    };

    const userNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);

    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const errorMessageHandler = () => {
          setError(null);
    };

 return(
     <div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorMessageHandler}/>}
    <Card className={classes.input} >
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler}></input>
        <label htmlFor="userage">Age(Years)</label>
        <input type="number" id="userage" value={enteredUserAge} onChange={userAgeChangeHandler}></input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
);
};

export default AddUser;