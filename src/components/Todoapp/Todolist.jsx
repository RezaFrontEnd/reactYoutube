import Todoitem from "./Todoitem";
export default function Todolist({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div
      className="bg-white rounded-lg shadow-lg shadow-gray-500 max-h-[400px]
         mx-auto p-[20px] overflow-y-auto mt-[50px] pb-[80px] pb-[24px]"
    >
      {sortedTodos.map((item) => (
        <h1 key={item.name}>
          <Todoitem item={item} todos={todos} setTodos={setTodos} />
        </h1>
      ))}
    </div>
  );
}
