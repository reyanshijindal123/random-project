import { Todo } from "../page";

export default function TodoList({
  todos,
  deleteTodo,
  editTodo,
}: {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number) => void;
}) {
  return (
    <div className="mt-6 flex flex-col gap-4">

      {todos.length === 0 && (
        <div className="text-center text-gray-500 py-6">
          No Todos Yet 🚀
        </div>
      )}

      {todos.map((todo, index) => (
        <div
          key={index}
className="
bg-white
rounded-2xl
p-4
md:p-6
border
shadow-md
hover:shadow-xl
transition
"        >
<h2
  className="
  text-lg
  md:text-xl
  font-bold
  break-words
  "
>            {todo.title}
  </h2>

<p
  className="
  text-sm
  md:text-base
  text-gray-600
  mt-2
  break-words
  "
>            {todo.description}
          </p>

<div
  className="
  flex
  flex-col
  md:flex-row
  gap-3
  mt-4
  "
>
            <button
              onClick={() => editTodo(index)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(index)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}