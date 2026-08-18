import TodoitemTrain from "./TodoitemTrain" 
export default function TodolistTrain({todos})
{
    return(
       <div>
            {todos.map((item)=>(<TodoitemTrain item={item}/>))}
       </div>
    )
}