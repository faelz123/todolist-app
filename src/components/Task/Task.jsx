import React from 'react';
import { CgClose , CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Task.css'

const Task = ({task , handleTaskConditionClick, handleTaskRemove}) => {

    const history = useNavigate();

    const handleTaskInfo = () => {
        history(`/${task.title}`)
    }

    return ( 

        <div 
            className='task-container'
            style={task.completed ? { borderLeft: '6px solid #ed76c3', textDecoration: 'line-through' } : {}}
        >
            <div className='task-title' onClick={() => handleTaskConditionClick(task.id)}>
                {task.title}
            </div>

            <div className='button-container'>
                <button className='info-task-button' onClick={handleTaskInfo}>
                    <CgInfo />
                </button>
                <button className='remove-task-button' onClick={() => handleTaskRemove(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>

     );
}
 
export default Task;