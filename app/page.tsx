"use client";

import { useEffect, useState } from "react";

import TodoForm from "./component/Todoform";
import TodoList from "./component/Todolist";

type Todo = {
  title: string;
  description: string;
};

export default function Home() {

  // STORE ALL TODOS
  const [todos, setTodos] = useState<Todo[]>([]);

  // LOAD TODOS FROM LOCAL STORAGE
  useEffect(() => {

    const storedTodos =
      localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }

  }, []);

  // ADD TODO FUNCTION
  const addTodo = (todo: Todo) => {

    // CREATE NEW ARRAY
    const updatedTodos = [...todos, todo];

    // UPDATE STATE
    setTodos(updatedTodos);

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
      "todos",
      JSON.stringify(updatedTodos)
    );
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="w-[400px] bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        {/* FORM */}
        <TodoForm addTodo={addTodo} />

        {/* TODO LIST */}
        <TodoList todos={todos} />

      </div>

    </main>
  );
}