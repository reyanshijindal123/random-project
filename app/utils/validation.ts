export const validateTodo = (
  title: string,
  description: string
) => {
  return (
    title.trim() !== "" &&
    description.trim() !== ""
  );
};