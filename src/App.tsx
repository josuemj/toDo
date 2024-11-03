import "./App.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <h1>ToDo</h1>

        <div className="inputContainer">
          <input className="addTaskInput" placeholder="Add Task"></input>
          <button className="addTaskButton">
            <h1>+</h1>
          </button>
        </div>

        <div className="tasksContainer">
          <div className="taskContainer"></div>
          <div className="taskContainer">Completed</div>
        </div>
      </div>
    </>
  );
}

export default App;
