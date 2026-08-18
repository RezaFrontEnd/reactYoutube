import { useState } from "react"
export default function FunctionalCounter(){
    const [counter,setCounter] = useState(0)
    return(
        <div>
            <div>counter value is :{counter}</div>
            <div><button onClick={()=>setCounter(counter+1)} className="border
            border-1 border-red-500 rounded-lg">increment</button></div>
            <div><button onClick={()=>setCounter(counter-1)} className="border
            border-1 border-red-500 rounded-lg mt-2">decrement</button></div>
            
        </div>
    )
}