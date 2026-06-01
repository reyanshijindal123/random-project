"use client";

import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { getTodos,saveTodos } from "./utils/localStorage";

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
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center p-4">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center mb-6">
          Todo App 🚀
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