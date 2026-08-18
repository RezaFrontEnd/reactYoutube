import { act, useReducer, useState } from "react";

export default function CounterTrain()
{
    function reducer(state,action){
        if(action.type == "increment"){
            return{...state,count:state.count + state.incrementBy}
        }
        if(action.type == "decrement"){
           return{...state,count:state.count - state.incrementBy}
        }
        if(action.type == "setIncrement"){
            return{...state,incrementBy:action.payload}
        }
      
   
      
    }
   const [state,dispatch] = useReducer(reducer,{count:0,incrementBy:1})

    return(
        <div>
            <h1>state is : {state.count}</h1>
            <h1>increment by : {state.incrementBy}</h1>
             <input type="text" value={state.incrementBy} onChange={(e)=>dispatch({type:"setIncrement",payload:Number(e.target.value)})}/>
            <button onClick={()=>dispatch({type:"increment",payload:1})} 
            className="border border-red-500 rounded-lg m-1">increment</button>
            <button onClick={()=>dispatch({type:"decrement",payload:1})} 
            className="border border-red-500 rounded-lg m-1">decrement</button>

        </div>
    )
}