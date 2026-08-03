import FoodItem from "./FoodItem";
export default function FoodItems({foodData,setFoodId}) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.idMeal} food={food} setFoodId={setFoodId}/>
      ))}
    </>
  );
}
