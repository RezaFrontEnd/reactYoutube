import { Link,Outlet } from "react-router-dom"
export  default function Dashboard()
{
    return(
        <div>
            this is Dashboard<br/>
            <ul>
                <li><Link to="/" className="border-1 rounded-lg">Home</Link></li>
                <li><Link to="profile" className="border-1 rounded-lg">profile</Link></li>
                <li><Link to="settings" className="border-1 rounded-lg">settings</Link></li>
            </ul>
             <Outlet/>
             
             
             

        </div>
    )
}