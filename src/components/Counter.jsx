import {useState} from "react"
export default function Counter(){
    const [count,setCount] = useState(0)
    const[incrementBy,setIncrementBy]=useState(1)
    function increment()
    {
        setCount(count+incrementBy)
    }
    function decrement()
    {
        setCount(count-incrementBy)
    }
    function increaseIncreament()
    {
        setIncrementBy(incrementBy+1)
    }
    function decreaseIncreament()
    {
        setIncrementBy(incrementBy-1)
    }
    return(
        <>
            <h1> Count value is:{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h1>we are increment the value by:{incrementBy}</h1>
            <button onClick={increaseIncreament}>incrementBy</button>
            <button onClick={decreaseIncreament}>DecreasementBy</button>
        </>

    )
    
}