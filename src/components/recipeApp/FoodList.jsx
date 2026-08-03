import FoodItem from "./FoodItem";
export default function FoodItems({foodData}) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.idMeal} food={food}/>
      ))}
    </>
  );
}
