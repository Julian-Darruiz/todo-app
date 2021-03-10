import React from 'react'
import AddTasks from './components/AddTasks'
import {ContextProvider} from './context/ContextProvider'
import '../src/App.css'


const App = () => {
  
  return (
    
    <ContextProvider>
      <h1 className="title">To Do List</h1>
        <AddTasks/>
    </ContextProvider>
    
  );
}

export default App
