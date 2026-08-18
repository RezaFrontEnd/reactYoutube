import { act, useReducer, useState } from "react";

export default function CounterTrain()
{
    function reducer(state,action){
        if(action.type == "increment"){
            return{...state,count:state.count + action.payload}
        }
        if(action.type == "decrement"){
           return{...state,count:state.count - action.payload}
        }
   
      
    }
   const [state,dispatch] = useReducer(reducer,{count:0})

    return(
        <div>
            <h1>state is : {state.count}</h1>
            <button onClick={()=>dispatch({type:"increment",payload:1})} 
            className="border border-red-500 rounded-lg m-1">increment</button>
            <button onClick={()=>dispatch({type:"decrement",payload:1})} 
            className="border border-red-500 rounded-lg m-1">decrement</button>
                   
        </div>
    )
}