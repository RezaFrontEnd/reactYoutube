import { useEffect, useState } from "react";
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
    },500)
    
    async function fetchFood() {
      const res = await fetch(`${url}?s=${query}`);
      const data = await res.json();
      setFoodData(data.meals);
    }
    return()=>clearTimeout(timer)
   
  }, [query]);
  return (
    <div className="mx-auto my-[20px] w-[300px] relative ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-b border-solid border-[#e3e4dc] px-[20px] py-[10px] w-full 
            outline-none text-[16px] text-[#393e46]"
      />
    </div>
  );
}
