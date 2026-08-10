import { Link, useParams } from "react-router-dom";

export default function Product(){
    const {id} = useParams()
    return(
        <div>
            <h1 className="text-3xl font-extrabold">Product List</h1>
            <p className="text-lg">Showing product with id:{id}</p>
        </div>
    )
}