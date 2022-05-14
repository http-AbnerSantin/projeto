
import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../src/App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';


function App() {
  const [tasks, setTask] = useState([
    {
      id:1,
      title:'Ler livro',
      completed:false,
    },
    {
      id:2,
      title:'Fazer a janta',
      completed:false,

    },

  ]);
  const handlesTaskClick = (taskId) => {
    
    const newTask = tasks.map((task) => {
      
      if (task.id === taskId) return {...task, completed:!task.completed}

      return task;
    });
    setTask(newTask);

  };

  const handlesTaskRemove = (taskId) => {
      const newTaks = tasks.filter(task => task.id !== taskId);
      setTask(newTaks);

  }

 

  const handleTaskAddition = (taskTitle) =>{
    
    const newTask = [...tasks,{
      title:taskTitle,
      id:uuid4(),
      completed:false,
    }]
    setTask(newTask)
  }


  return (
    <Router>
      <div className="App container">
      <Header />
      
      <Route 
        path="/"
        exact
        render = {() => {return (
          <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks}
                handlesTaskClick={handlesTaskClick}
                handlesTaskRemove = {handlesTaskRemove}
              />
          </>
        )}} 
        />     
      </div>        
    </Router>  
  );
}

export default App;
