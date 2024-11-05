import React from "react";
import "./pendingItems.css";
// PendingTask.tsx

interface Task {
  id: number;
  text: string;
}

interface PendingTaskProps {
  pendingTask: Task;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

const PendingTask: React.FC<PendingTaskProps> = ({
  pendingTask,
  onDelete,
  onComplete,
}) => {
  return (
    <>
      <div className="pendingItem">
        <button
          className="deleteTask"
          onClick={() => onDelete(pendingTask.id)}
        >del</button>
        <h3>{pendingTask.text}</h3>
        <button className="taskDoneButton" onClick={() => {onComplete(pendingTask.id)}}>done</button>
      </div>
    </>
  );
};

export default PendingTask;
