import { SetStateAction, useReducer, useState } from "react";
import "./App.css";
import PendingTask from "./components/pendingItem";

interface Task {
  id: number;
  text: string;
}

function App() {
  const [inputTask, setInputTask] = useState<string>("");
  const [completedList, setCompletedList] = useState<Task[]>([]);
  const [pendingList, setPendingList] = useState<Task[]>([]);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputTask(event.target.value);
  };

  const onAddTask = () => {
    const newTask: Task = {
      id: Date.now(), // Unique ID based on timestamp
      text: inputTask.trim(),
    };
    setPendingList([...pendingList, newTask]);
    setInputTask("");
  };

  const deleteTask = (id: number) => {
    const updatedList = pendingList.filter((task) => task.id !== id);
    setPendingList(updatedList);
  };

  const completeTask = () => {};
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
            {pendingList.map((task, index) => (
              <PendingTask
                key={task.id}
                pendingTask={task}
                onDelete={deleteTask}
                onComplete={completeTask}
              />
            ))}
          </div>
          <div className="taskContainer">Completed</div>
        </div>
      </div>
    </>
  );
}

export default App;
