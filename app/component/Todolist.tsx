type Todo = {
  title: string;
  description: string;
};

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
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border p-4 rounded-xl shadow"
        >
          <h2 className="text-xl font-bold">
            {todo.title}
          </h2>

          <p className="text-gray-600">
            {todo.description}
          </p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => editTodo(index)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}