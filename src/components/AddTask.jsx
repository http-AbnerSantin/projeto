import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setData] = useState('');

    const handleInputChange = (e) => {
        setData (e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setData('');

    }
     return (
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                className='add-task-input' 
                type="text" 
                value={inputData}
                />
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick } >Adicionar</Button> 
            </div>
        </div>  
    )
}

export default AddTask