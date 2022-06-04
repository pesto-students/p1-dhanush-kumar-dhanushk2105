import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className='input-group mb-3'>
            <input className='form-control'  value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='btn btn-outline-success my-2 my-sm-0'>ADD</button>
        </form>
    );
};

export default ToDoForm;