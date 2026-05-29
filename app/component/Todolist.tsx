type Todo = {
  title: string;
  description: string;
};

export default function TodoList({
  todos,
}: {
  todos: Todo[];
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

        </div>
      ))}

    </div>
  );
}