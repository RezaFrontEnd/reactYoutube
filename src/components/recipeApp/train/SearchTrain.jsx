import { useEffect, useState } from "react";

export default function SearchTrain({foodData,setFoodData}) {
  const [query, setQuery] = useState("");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php`
  useEffect(()=>{
    const timer = setTimeout(() => {
       if(query.trim()=="")
      {
        setFoodData([])
        return
      }
      fetchFood()
    }, 500);
    async function fetchFood(){
      const res = await fetch(`${url}?s=${query}`)
      const data = await res.json()
      setFoodData(data.meals)
    }
    return()=>clearTimeout(timer)
  },[query])
  
  return (
    <>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} 
        className="border-1 rounded-4"/>
    </>
  );
}
