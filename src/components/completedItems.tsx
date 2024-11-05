import React from "react";
import "./pendingItems.css";
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
      <div className="pendingItem">
        <button className="deleteTask" onClick={() => onDelete(completedTask.id)}>
          del
        </button>
        <h3>{completedTask.text}</h3>
      </div>
    </>
  );
};

export default CompletedTask;
