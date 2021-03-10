import React, { useContext } from "react";
import Context from "../context/ContextProvider";

import "../App.css";
import SelectTask from "./SelectTask";

const AddTask = () => {
const {handleSubmit } = useContext(Context)
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="addtask" />
      <button type="submit">Add</button>
    </form>
    <SelectTask/>
    </>
  );
}

export default AddTask;
