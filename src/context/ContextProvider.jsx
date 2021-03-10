import React, { createContext, useState} from "react";


const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);
 
  
  
  // const handleChange = (e) =>{
  //   setTask(e.target.value)
  //   // setTask(e.target.value)
  // }
    
    
    const handleSubmit = (e) => {
      e.preventDefault(e)
      setTask([e.target[0].value, ...task])
      console.log(task)
  }

  return (
    <Context.Provider value={{ task, handleSubmit}}>
      {children}
    </Context.Provider>
  );
};
export default Context;
