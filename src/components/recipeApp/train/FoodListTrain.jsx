import FoodItemTrain from "./FoodItemTrain";

export default function FoodListTrain({foodData}){
    return(
        <div>
            {foodData.map((food)=><FoodItemTrain food={food}/>)}
        </div>
    )
}