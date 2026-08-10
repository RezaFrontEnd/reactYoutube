import { useState } from "react"
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
export  default function HomePage()
{
    const navigate = useNavigate()
    const [username,setusername] = useState()
    function handleClick(){
        
        navigate("/dashboard/profile",{state:{username}})
    }
    return(
        <div>
            <h1> this is HomePage</h1>
            <Link to="/dashboard" className="border-1 rounded-lg">dashboard</Link><br/>
            <input type="text" value={username} 
            onChange={(e)=>setusername(e.target.value)} className="border-1 
            rounded-lg outline-0" /><br/>
            <button onClick={handleClick} className="border-1 rounded-md 
            bg-gray-500 cursor-pointer">go to profile page</button>
        </div>
       
    )
}