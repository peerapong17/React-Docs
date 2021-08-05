import React, { useEffect, useState } from "react";
import style from "./TodoList.module.css";

interface Props {
  taskTitle: string;
  isCompleted: boolean;
  index: number;
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
  onUpdate: (index: number, task: string) => void;
}

const TodoList: React.FC<Props> = ({
  isCompleted,
  taskTitle,
  index,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    setTask(taskTitle);
  }, [taskTitle]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    onUpdate(index, task);
  };

  return (
    <div className={style.todoTile}>
      <input
        onChange={() => onToggle(index)}
        type="checkbox"
        name=""
        id=""
        checked={isCompleted}
      />
      {isEditing ? (
        <input type="text" name="task" value={task} onChange={onChange} />
      ) : (
        <span>{taskTitle}</span>
      )}
      <button type="button" onClick={isEditing ? handleUpdate : handleEdit}>
        {isEditing ? "Update" : "Edit"}
      </button>
      <button type="button" onClick={() => onDelete(index)}>
        Delete
      </button>
    </div>
  );
};

export default TodoList;
