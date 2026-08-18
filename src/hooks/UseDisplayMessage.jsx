import { useState } from "react"

export default function UseDisplayMessage(){
    const [Message,setMessage] = useState("hello i am reza")
    function DisplayMesage()
    {
        console.log("this is a message from console")
    }
    return [Message,DisplayMesage]
}