import React from 'react';

import Task from './Task/Task';


const TaskList = ({tasks , handleTaskConditionClick, handleTaskRemove}) => {

    return (
        <>
            {tasks.map(task => 
                <Task 
                    key={task.id}
                    task={task} 
                    handleTaskConditionClick={handleTaskConditionClick} 
                    handleTaskRemove={handleTaskRemove}/>)}
        </>
    );
}

export default TaskList;