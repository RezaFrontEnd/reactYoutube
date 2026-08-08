import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function SearchFood({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const url = "https://www.themealdb.com/api/json/v1/1/search.php"
  useEffect(() => {
    const timer = setTimeout(()=>{
      if(query.trim() === "")
        {
          setFoodData([])
          return
        }
        fetchFood()
    },1200)
    
    async function fetchFood() {
      const res = await fetch(`${url}?s=${query}`);
      const data = await res.json();
      setFoodData(data.meals);
    }
    return()=>clearTimeout(timer)
   
  }, [query]);
  
  return (
    <div className="searchFoodContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchInput"
      />
    </div>
  );
}
