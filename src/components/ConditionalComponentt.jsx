import { useState } from "react"
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';
export default function ConditionalComponentt(){
    const [display,setDisplay] = useState(false)
    if(display)
        {
            return(
                <div><Counter></Counter></div>
            )
        }
    else{
       return(
         <div>
            <FunctionalCounter></FunctionalCounter>
        </div>
       )
    }
    
}