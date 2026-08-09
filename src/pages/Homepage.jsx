import { Link } from "react-router-dom"
import Todo from './../components/Todoapp/Todo';
export  default function HomePage()
{
    return(
        <div>
             this is HomePage<br/>
             <Link to="/dashboard" className="border-1 rounded-lg" >Dashboard</Link>
        </div>
       
    )
}