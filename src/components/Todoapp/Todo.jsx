import { useState } from "react";
import Form from "../Form";
import Todolist from "./Todolist";
import Footer from "../Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className="min-h-screen">
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <div className="mt-auto">
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </div>
    </div>
  );
}
