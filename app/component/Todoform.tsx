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
  const [description, setDescription] =
    useState("");

  useEffect(() => {
    if (editTodoData) {
      setTitle(editTodoData.title);
      setDescription(editTodoData.description);
    }
  }, [editTodoData]);

  const handleSubmit = () => {
    if (!title || !description) return;

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
        className="border p-3 rounded-lg"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Enter description"
        className="border p-3 rounded-lg"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white p-3 rounded-lg"
      >
        {isEditing
          ? "Update Todo"
          : "Add Todo"}
      </button>
    </div>
  );
}