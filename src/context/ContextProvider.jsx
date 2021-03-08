import React, { createContext, useState } from 'react';

const Context = createContext();


export const ContextProvider =  ({children}) => {
  const [tasks, setTasks] = useState([])

  const handleChange = (e) =>{
    tasks.split().push(setTasks(e.target.value))
  }

  const handleSubmit = (e) =>{
    e.preventDefault() 
    
  }
  return (
  <Context.Provider value={{tasks, handleChange, handleSubmit}}>
    {children}
  </Context.Provider>
  )
}
export default Context;
