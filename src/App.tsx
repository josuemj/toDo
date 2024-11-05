import { SetStateAction, useReducer, useState } from "react";
import "./App.css";
import PendingTask from "./components/pendingItem";
import CompletedTask from "./components/completedItems";

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

  //Add the task to pending task
  const onAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      text: inputTask.trim(),
    };
    setPendingList([...pendingList, newTask]);
    // setInputTask("");
  };

  //Deletes the task from pending (not completed)
  const deleteTask = (id: number) => {
    const updatedList = pendingList.filter((task) => task.id !== id);
    setPendingList(updatedList);
  };

  //Pass the taks to completed task
  const completeTask = (id: number) => {
    const selectedTask = pendingList.filter((task) => task.id == id);

    const completedTask: Task = {
      id: Date.now(),
      text: selectedTask[0].text.trim(),
    };

    const updatedList = pendingList.filter((task) => task.id !== id);
    setPendingList(updatedList);

    setCompletedList([...completedList, completedTask]);
  };

  const deleteCompletedTask = (id: number) => {
    const updatedList = completedList.filter((task) => task.id !== id);
    setCompletedList(updatedList);
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
            {pendingList.map((task) => (
              <PendingTask
                key={task.id}
                pendingTask={task}
                onDelete={deleteTask}
                onComplete={completeTask}
              />
            ))}
          </div>
          <div className="taskContainer">
            Completed
            {completedList.map((task) => (
              <CompletedTask
                key={task.id}
                completedTask={task}
                onDelete={deleteCompletedTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
