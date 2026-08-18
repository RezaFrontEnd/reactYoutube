import { Link } from "react-router-dom"
export default function Homepage(){
    return(
        <div>
           <h3>this is homePage</h3>
            <p>link to dashboard <Link to="/dashboard">Link</Link></p>
        </div>
    )
}