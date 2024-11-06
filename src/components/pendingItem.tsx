import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

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
        <button className="deleteTask" onClick={() => onDelete(pendingTask.id)}>
          <FaTrashCan />
        </button>
        <h3 className="taskText">{pendingTask.text}</h3>
        <button
          className="taskDoneButton"
          onClick={() => {
            onComplete(pendingTask.id);
          }}
        >
          <FaCheck />
        </button>
      </div>
    </>
  );
};

export default PendingTask;
