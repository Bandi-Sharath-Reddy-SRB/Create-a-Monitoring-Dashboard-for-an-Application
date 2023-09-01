import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const editTask = () => {
    if (task && selectedTaskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex] = task;
      setTasks(updatedTasks);
      setTask("");
    }
  };

  const deleteTask = () => {
    if (selectedTaskIndex !== -1) {
      const updatedTasks = tasks.filter(
        (_, index) => index !== selectedTaskIndex
      );
      setTasks(updatedTasks);
      setSelectedTaskIndex(-1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <div className="task-form">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {selectedTaskIndex === -1 ? (
            <button onClick={addTask}>Add Task</button>
          ) : (
            <div className="buttons">
              <button onClick={editTask}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
            </div>
          )}
        </div>
        <div>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => setSelectedTaskIndex(index)}
                className={selectedTaskIndex === index ? "selected" : ""}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
