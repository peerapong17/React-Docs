import React, { useState } from "react";
import { Todo } from "../TodoPage";

interface Props {
  setTodoList: (task: Todo) => void;
}

const TodoForm: React.FC<Props> = ({ setTodoList }) => {
  const [task, setTask] = useState<Todo>({
    taskTitle: "",
    isCompleted: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList(task);
    setTask({ taskTitle: "", isCompleted: false });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="task">Task</label>
      <input
        value={task.taskTitle}
        onChange={onChange}
        type="text"
        name="taskTitle"
        id="taskTitle"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
