"use client";

import { useEffect, useState } from "react";
import TodoForm from "./component/Todoform";
import TodoList from "./component/Todolist";
import { getTodos, saveTodos } from "./component/helper/localstorage";

export type Todo = {
  title: string;
  description: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addOrUpdateTodo = (todo: Todo) => {
    let updatedTodos;

    if (editIndex !== null) {
      updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setEditIndex(null);
    } else {
      updatedTodos = [...todos, todo];
    }

    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const editTodo = (index: number) => {
    setEditIndex(index);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[450px] bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        <TodoForm
          addOrUpdateTodo={addOrUpdateTodo}
          editTodoData={
            editIndex !== null
              ? todos[editIndex]
              : null
          }
          isEditing={editIndex !== null}
        />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </main>
  );
}