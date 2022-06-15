import React , { useState } from 'react';


import TaskList from './components/TaskList';
import Header from './components/Header';

import './App.css'
//tasklist
//tasks
//input
//header

const App = () => {

  const [tasks, setTasks] = useState([
  {
    id: 1,
    task: 'Dormir',
    completed: false
  }, 
  {
    id: 2,
    task: 'Comer',
    completed: false
  },
  ]);

  return (
    <div className='container'>
      <Header />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;