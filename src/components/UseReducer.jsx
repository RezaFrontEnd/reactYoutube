import { useReducer, useState } from "react"

export default function UseReducer()
{
    function reducer(state,action)
    {
        if(action.type == "increment") 
        {
            return{...state,count:state.count + state.IncrementBy}
        }
        if(action.type == "decrement") 
        {
            return{...state,count:state.count - state.IncrementBy}
        }
        if(action.type == "setIncrementBy")
            {
                 return{...state,IncrementBy:action.payload}
            }
        
    }
    const [state,dispatch] = useReducer(reducer,{count:0,IncrementBy:1})
    const [cont,setCount] = useState(0)
   return(
        <div>
            
            state:{state.count}<br/>
            <input type="text" className="border-1 rounded-lg" 
            value={state.IncrementBy} onChange={(e)=>{dispatch({type:"setIncrementBy",payload:Number(e.target.value)})}} />
            <button onClick={()=>dispatch({type:"increment",payload:1})}>add</button><br/>
            <button onClick={()=>dispatch({type:"decrement",payload:1})}>decrement</button>

        </div>
    )
      
}
   
   