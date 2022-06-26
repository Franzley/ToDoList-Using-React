import React from "react";
import Inputs from "./Inputs.jsx";
import { useState } from "react";

const ToDos = () => {
  const tasksList = ["test1", "test2", "test3"];
  const [inputValue, setInputValue] = useState(tasksList);
  const [remainingTasks, setremainingTasks] = useState(inputValue.length);

  const acceptTaskHandler = (inputValue) => {
    setInputValue((current) => [...current, inputValue]);
    setremainingTasks(remainingTasks + 1)
  };

  function deleteListHandler(item) {
    item.target.parentNode.parentNode.remove();
      setremainingTasks(remainingTasks - 1)
  }

  const listItems = inputValue.map((item, index) => {
    return (
      <li key={index} className="d-flex flex-row justify-spacing-between">
        {item}
        <span
          type="button"
          onClick={deleteListHandler}
          className="delete-button"
        >
          <i className="fas fa-times"></i>
        </span>
      </li>
    );
  });

  return (
    <div>
      <h1 className="todo-header">todos</h1>
      <div className="todos-container d-flex flex-column">
        <div className="todos-container-header d-flex flex-row">
          <span className="me-3">Tasks</span><Inputs onTask={acceptTaskHandler} />
        </div>
        <div className="todos-container-body flex-grow-1">
          <ul>{listItems}</ul>
        </div>
        <div className="todos-container-footer flex-grow-1">
          {remainingTasks === 0 ? "No tasks, add a task" : `Number of Tasks: ${remainingTasks}`}
        </div>
      </div>
    </div>
  );
};

export default ToDos;
