import React, { useContext } from "react";
import Context from "../context/ContextProvider";

const SelectTask = () => {
  const { task } = useContext(Context);

  return (
  
    <div>
      {task.map(task => <li key={task}> {task} </li>)}
    </div>
    
  
  )
};

export default SelectTask;
