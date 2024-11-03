import { SetStateAction, useReducer, useState } from "react";
import "./App.css";

function App() {
  const [inputTask, setInputTask] = useState<string>("");
  const [pendingList, setPendingList] = useState<string[]>([]);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputTask(event.target.value);
  };

  const onAddTask = () => {
    setPendingList([...pendingList, inputTask])
  };

  return (
    <>
      <div className="appContainer">
        <h1>ToDo</h1>

        <div className="inputContainer">
          <input
            className="addTaskInput"
            placeholder="Add Task"
            onChange={handleInputChange}
          ></input>
          <button className="addTaskButton" onClick={onAddTask}>
            <h1>+</h1>
          </button>
        </div>

        <div className="tasksContainer">
          <div className="taskContainer">
            pending

            {pendingList.map( (task, index) => (
              <li key={index}>{task}</li>
            ))}
          </div>
          <div className="taskContainer">Completed</div>
        </div>
      </div>
    </>
  );
}

export default App;
