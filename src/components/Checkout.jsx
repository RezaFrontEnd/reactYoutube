import { createContext, useContext } from "react"
import { userContext } from "../App"


export default function Checkout(){
   const value = useContext(userContext)
    return(
        <div>
            checkout as {value}
        </div>
    )
}