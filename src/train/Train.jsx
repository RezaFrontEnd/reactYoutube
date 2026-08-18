import { useState } from "react"
import FormTrain from "./FormTrain"
import TodoitemTrain from "./TodoitemTrain"
import TodolistTrain from "./TodolistTrain"
export default function Train(){
    const[todos,setTodos] = useState([])
    return(
       <div>
          <FormTrain todos={todos} setTodos={setTodos}  />
          <TodolistTrain todos={todos}/>  
       </div>
    )
}