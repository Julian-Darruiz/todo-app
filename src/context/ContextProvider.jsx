import React, { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
 
  const listTasks = [];
  
  const handleChange = (e) =>{
    // setTasks({
      // form: {...tasks.form,
      // [e.target.name] : e.target.value},
      // listTasks:[listTasks.push(tasks.form)]})
      console.log(e)
      
    }
    
    
    
    const handleSubmit = (e) => {
      e.preventDefault();  
      setTasks({
        form: {...tasks.form,
        [e.target[0].name] : e.target[0].value},
        listTasks:[listTasks.push(e.target[0].value)]
      })
      console.log(listTasks)
  };
  return (
    <Context.Provider value={{ tasks, handleChange, handleSubmit }}>
      {children}
    </Context.Provider>
  );
};
export default Context;
