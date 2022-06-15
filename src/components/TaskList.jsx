import React from 'react';

import Task from './Task/Task';


const TaskList = ({tasks}) => {
    console.log(tasks);

    return (
        <>
            {tasks.map(task => <Task task={task}/>)}
        </>
    );
}

export default TaskList;