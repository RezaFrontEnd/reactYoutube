import { useReducer, useState } from "react"

export default function UseReducer()
{
    function reducer(state,action)
    {
        if(action.type == "add")
            {
                return{...state,balance:state.balance + action.payload}
            }  
        if(action.type == "sub")
            {
                return{...state,balance:state.balance - action.payload}
            }          
    }
    const [state,dispatch] = useReducer(reducer,{balance:0})
    const [amount,setAmount] = useState(0)
    return(
        <div>
            {state.balance}
           <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}
           className="border-1 rounded-4" />  
           <button onClick={()=>dispatch({type:"add",payload:Number(amount)})} className="border-1 m-[2px]">+</button>  
           <button onClick={()=>dispatch({type:"sub",payload:Number(amount)})}className="border-1 ">-</button>  
           
        </div>
    )
}