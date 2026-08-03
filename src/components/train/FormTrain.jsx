import { useState } from "react";
export default function FormTrain({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodos([...todos, todo]);
          }}
        >
          add
        </button>
      </form>
      ;
    </div>
  );
}
