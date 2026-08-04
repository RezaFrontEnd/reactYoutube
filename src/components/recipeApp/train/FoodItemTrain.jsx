export default function FoodItemTrain({food})
{
    return(
        <div>
            <h1>{food.strMeal}</h1>
            <img src={food.strMealThumb} />
        </div>
    )
}