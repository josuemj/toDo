import React from "react";
import "./completedItems.css";
import { FaTrashCan } from "react-icons/fa6";

// PendingTask.tsx

interface Task {
  id: number;
  text: string;
}

interface CompletedTaskProps {
  completedTask: Task;
  onDelete: (id: number) => void;
}

const CompletedTask: React.FC<CompletedTaskProps> = ({
  completedTask,
  onDelete,
}) => {
  return (
    <>
      <div className="completedItem">
        <button
          className="deleteTask"
          onClick={() => onDelete(completedTask.id)}
        >
          <FaTrashCan />
        </button>
        <h3 className="taskText">{completedTask.text}</h3>
      </div>
    </>
  );
};

export default CompletedTask;
