"use client";

import { useState } from "react";

type Todo = {
  title: string;
  description: string;
};

export default function TodoForm({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}) {

  // STORE TITLE INPUT
  const [title, setTitle] = useState("");

  // STORE DESCRIPTION INPUT
  const [description, setDescription] = useState("");

  // BUTTON FUNCTION
  const handleSubmit = () => {

    // CHECK EMPTY INPUT
    if (!title || !description) return;

    // SEND DATA TO PARENT
    addTodo({
      title,
      description,
    });

    // CLEAR INPUTS
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-4">

      {/* TITLE INPUT */}
      <input
        type="text"
        placeholder="Enter title"
        className="border p-3 rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* DESCRIPTION INPUT */}
      <textarea
        placeholder="Enter description"
        className="border p-3 rounded-lg"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        className="bg-black text-white p-3 rounded-lg"
      >
        Add Todo
      </button>
    </div>
  );
}