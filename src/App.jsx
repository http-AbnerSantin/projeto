
import React, { useState } from 'react';
import '../src/App.css';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


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
  
  return (
    <>
      <div className="App container">
        <AddTask />
        <Tasks tasks={tasks} />
        
      </div>        
    </>  
  );
}

export default App;
