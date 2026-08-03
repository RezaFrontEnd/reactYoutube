import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
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
  return (
    <>
      {foodId}<br/>
      {food.strMeal} <br />
      <img src={food.strMealThumb} /> <br />
      {food.strArea} <br />
      {food.strCategory} <br />
      {food.strIngredient1} <br />
      {food.strMeasure1}<br/>
      {food.strIngredient2} <br />
      {food.strMeasure2}<br/>
      {food.strIngredient3} <br />
      {food.strMeasure3}<br/>
      {food.strIngredient4} <br />
       {food.strMeasure4}<br/>
      {food.strIngredient5} <br />
      {food.strMeasure5}<br/>
      {food.strIngredient6} <br />
      {food.strMeasure6}<br/>
      {food.strIngredient7} <br />
      {food.strMeasure7}<br/>
      {food.strIngredient8} <br />
      {food.strMeasure8}<br/>
      {food.strInstructions}<br/>
      
      
      
     
    
      
      
      
    </>
  );
}
