import React from 'react';
import {useParams, useNavigate} from 'react-router-dom'

import Button from '../Button/Button';

import './TaskInfo.css';

const TaskInfo = () => {
    const params = useParams();
    const history = useNavigate();

    const handleBackButton = () => {
        history(-1);
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButton}>Back</Button>
            </div>
            <div className="task-info-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, reprehenderit?</p>
            </div>
        </>
    );
}
    
export default TaskInfo;