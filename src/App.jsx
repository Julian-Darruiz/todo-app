import React from 'react'
import AddInput from './components/AddInput'
import SelectTask from './components/SelectTask'
import {ContextProvider} from './context/ContextProvider'
import '../src/App.css'


const App = () => {
  
  return (
    
    <ContextProvider>
      <h1 className="title">To Do List</h1>
        <AddInput/>
        <SelectTask/>
    </ContextProvider>
    
  );
}

export default App
