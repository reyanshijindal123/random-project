import { Todo } from "../page";

export const getTodos = (): Todo[] => {
  const data = localStorage.getItem("todos");

  return data ? JSON.parse(data) : [];
};

export const saveTodos = (
  todos: Todo[]
) => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
};