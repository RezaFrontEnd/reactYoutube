import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState(null);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
  useEffect(() => {
   
    if (!foodId) return;
    async function fetchFood() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      console.log(data);
      setFood(data.meals[0]);
    }
    fetchFood();
  }, [foodId]);
  if(!food){
    return null
  }
  return (
    <div className="recipeCard">
      <h1 className="recipeName">{food.strMeal}</h1><br />
      <img src={food.strMealThumb} className="recipeImage" /> <br />
      <p><strong>{food.strArea}</strong></p>
      <ItemList food={food}/>
      <p><strong>{food.strCategory}</strong></p>
      <p className="instructions"><strong>{food.strInstructions}</strong></p>
    </div>
  );
}
