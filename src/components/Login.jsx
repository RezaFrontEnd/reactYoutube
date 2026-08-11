import { useContext,useState } from "react"
import { UserContext } from "../context/UserContext"
export default function Login(){
    const [value,setValue] = useState("")
    const {setUser} = useContext(UserContext)
    function handlesubmit(e){
        e.preventDefault()
        setUser(value)
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" value={value} 
                onChange={(e)=>setValue(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}