
export default function FoodItems({food,setFoodId}) {
  return (
    <div className="foodItemContainer">
        <div className="foodItemDiv2">
            <p className="foodItemsTitle">{food.strMeal}</p>
        </div>
        <img src={food.strMealThumb} className="max-w-[100%] h-auto color-[#393e46]"  />
       <div className="foodItemsDiv3">
           <button className=" bg-[#29bb89] text-white p-[10px] text-[14px] font-semibold
              cursor-pointer rounded-[10px]" onClick={()=>setFoodId(food.idMeal)}>view Recipe</button>
          </div>
    </div>
  );
}
