import { Link } from "react-router-dom"
export  default function Dashboard()
{
    return(
        <div>
            this is Dashboard<br/>
            <Link to="/" className="border-1 rounded-lg">Home</Link>

        </div>
    )
}