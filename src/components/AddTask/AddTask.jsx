import React, { useState } from 'react';

import Button from '../Button/Button';

import './AddTask.css'

const AddTask = ({handleTaskAdd}) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleTaskAddClick = () => {
        if(inputData !== '') {
            handleTaskAdd(inputData);
            setInputData('');
        }
    }

    return ( 

        <div className='addtask-container'>

            <input 
            onChange={handleInputChange}
            value={inputData} 
            className='addtask-input' 
            type="text" />

            <div className="addtask-button-container">
                <Button onClick={handleTaskAddClick}>Add</Button>
            </div>

        </div>

     );
}
 
export default AddTask;