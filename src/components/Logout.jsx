import { useContext } from "react"

export default function Logout()
{
    const {setUser} = useContext(userContext)
    return(
        <div>
            <button onClick={()=>setUser("Guest")}>Logout</button>
        </div>
    )
}