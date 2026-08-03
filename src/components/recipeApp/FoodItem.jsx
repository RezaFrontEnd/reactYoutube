
export default function FoodItems({food}) {
  return (
    <div className="w-[300px] rounded-[8px] shadow-[0_4px_6px_rgba(0,0,0,.5)] m-[20px] overflow-hidden
    font-[Polysans,sans-serif]">
        <div className="font-[Arial,Helvetica,sans-serif] text-center">
            <p className="font-[1em] font-semibold ">{food.strMeal}</p>
        </div>
        <img src={food.strMealThumb} className="max-w-[100%] h-auto color-[#393e46]"  />
       <div className="mb-[15px] flex justify-around text-center mt-3">
           <button className=" bg-[#29bb89] text-white p-[10px] text-[14px] font-semibold
              cursor-pointer rounded-[10px]">view Recipe</button>
          </div>
    </div>
  );
}
