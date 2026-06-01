"use client";

import { useEffect, useState } from "react";
import { Todo } from "../page";

export default function TodoForm({
  addOrUpdateTodo,
  editTodoData,
  isEditing,
}: {
  addOrUpdateTodo: (todo: Todo) => void;
  editTodoData: Todo | null;
  isEditing: boolean;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTodoData) {
      setTitle(editTodoData.title);
      setDescription(editTodoData.description);
    }
  }, [editTodoData]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim())
      return;

    addOrUpdateTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 outline-none"
      />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 outline-none"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition"
      >
        {isEditing
          ? "Update Todo"
          : "Add Todo"}
      </button>

    </div>
  );
}