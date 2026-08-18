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
            <button onClick={increment} className="border border-1 border-black rounded-lg m-1">increment:</button><br/>
            <button onClick={decrement} className="border border-1 border-black rounded-lg m-1">decrement:</button><br/>
            <h1>we are increment the value by:{incrementBy}</h1>
            <button onClick={increaseIncreament} className="border border-1 border-black rounded-lg m-1">incrementBy</button><br/>
            <button onClick={decreaseIncreament} className="border border-1 border-black rounded-lg m-1">DecreasementBy</button><br/>
        </>

    )
    
}