import { useState } from "react";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false})
 

  
  return (
    <>
      <form
        onSubmit={(e)=>{
          e.preventDefault()
          setTodos([...todos, todo]);
          setTodo({name:"",done:false});
        }}
        className="bg-white rounded-2xl
      p-[20px] w-[500px] mx-auto mt-[50px] shadow-lg shadow-gray-500"
      >
        <div className="flex">
          <input
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            type="text"
            className="border-1"
            value={todo.name}
            className="w-[100%] border-0 block outline-0 text-black text-[16px]"
            placeholder="enter todo item"
          />
          <button
            type="submit"
            className="inline-block border-0 rounded-md bg-[#f7ca18]
           py-[12px] px-[20px] text-[#ffffff] cursor-pointer"
          >
            add
          </button>
        </div>
      </form>
    </>
  );
}
