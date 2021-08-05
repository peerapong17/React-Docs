import React, { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

export interface Todo {
  taskTitle: string;
  isCompleted: boolean;
}

const Todo: React.FC<{}> = () => {
  var [todoList, setTodoList] = useState<Todo[]>([]);

  const onSetTodoList = (task: Todo) => {
    setTodoList([...todoList, task]);
  };

  const onToggle = (index: number) => {
    setTodoList((prev) => {
      return prev.map((todo, i) =>
        index === i ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  };

  const onUpdate = (index: number, task: string) => {
    setTodoList((prev) => {
      return prev.map((todo, i) =>
        index === i ? { ...todo, taskTitle: task } : todo
      );
    });
  };

  const onDelete = (index: number) => {
    setTodoList((prev) => {
      return prev.filter((_, i) => index !== i);
    });
  };

  return (
    <div>
      <TodoForm setTodoList={onSetTodoList} />
      {todoList.map((todo, index) => {
        return (
          <TodoList
            key={index}
            index={index}
            {...todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};

export default Todo;
