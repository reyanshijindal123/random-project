export const saveTodos = (todos: any) => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
};
export const getTodos = () => {
  const data = localStorage.getItem("todos");

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};