import { useState } from "react"
import TodoitemTrain from "./TodoitemTrain"
import FormTrain from './FormTrain';
import TodolistTrain from "./TodolistTrain";

export default function TodoTrain(){
    const[todos,setTodos] = useState([])
    return(
        <>
           <FormTrain todos={todos} setTodos={setTodos} />
           <TodolistTrain todos={todos}/>
        </>
    )
}