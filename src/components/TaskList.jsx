import React from 'react';

import Task from './Task/Task';


const TaskList = ({tasks , handleTaskConditionClick, handleTaskRemove}) => {

    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskConditionClick={handleTaskConditionClick} handleTaskRemove={handleTaskRemove}/>)}
        </>
    );
}

export default TaskList;