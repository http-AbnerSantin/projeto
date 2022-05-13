
import React, { useState } from 'react';
import '../src/App.css';

import Tasks from './components/Tasks';


function App() {
  const [Task, setTask] = useState([
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
        <h1>aaaa</h1>
        
        <Tasks Task={Task} />
        </div>
             
        
    </>  
  );
}

export default App;
