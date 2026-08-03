import Hello from "./Hello"
import Welcome from "./Welcome"

export default function Test(){
    let display = false
    if(display)
        {
           return <Hello />
        }
    else
        {
            return <Welcome />
        }
     
   
}