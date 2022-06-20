import React , { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import TaskList from './components/TaskList';
import Header from './components/Header';
import AddTask from './components/AddTask/AddTask';
import TaskInfo from './components/TaskInfo/TaskInfo';

import './App.css'
//tasklist
//tasks
//input
//header

const App = () => {

  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: 'Dormir',
    completed: false
  }, 
  {
    id: 2,
    title: 'Comer',
    completed: true
  },
  ]);

  useEffect(()=> {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };
    fetchTasks();
  }, []);

  
  const handleTaskConditionClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed };
      } else {
        return task;
      }
    })

    setTasks(newTasks);
  }

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [...tasks, 
    {
      task: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks);
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }
 
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" exact element={<>
            <AddTask handleTaskAdd={handleTaskAdd} />
            <TaskList 
              tasks={tasks} 
              handleTaskConditionClick={handleTaskConditionClick}  
              handleTaskRemove={handleTaskRemove}
            />
          </>}/>
          <Route 
            path="/:taskTitle"
            exact
            element={<TaskInfo />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;