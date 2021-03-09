import React, { useContext } from "react";
import Context from "../context/ContextProvider";

import "../App.css";

const AddTask = () => {
const {handleSubmit, handleChange} = useContext(Context)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="addtask"  onChange={handleChange}/>
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddTask;
