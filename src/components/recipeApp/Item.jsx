export default function Item({food}){
    return(
    <div>
         <ul className="recipeList">
        <li className="recipeItems">
          <span>{food.strIngredient1}</span>
          <span>{food.strMeasure1}</span>
        </li>
        <li className="recipeItems">
         <span>{food.strIngredient2}</span>
          <span>{food.strMeasure2}</span>
        </li>
        <li className="recipeItems">
         <span>{food.strIngredient3}</span>
          <span>{food.strMeasure3}</span>
        </li>
         <li className="recipeItems">
         <span>{food.strIngredient4}</span>
          <span>{food.strMeasure4}</span>
        </li>
         <li className="recipeItems">
         <span>{food.strIngredient5}</span>
          <span>{food.strMeasure5}</span>
        </li>
         <li className="recipeItems">
         <span>{food.strIngredient6}</span>
          <span>{food.strMeasure6}</span>
        </li>
         <li className="recipeItems">
         <span>{food.strIngredient7}</span>
          <span>{food.strMeasure7}</span>
        </li>
         <li className="recipeItems">
         <span>{food.strIngredient8}</span>
          <span>{food.strMeasure8}</span>
        </li>
      </ul>
    </div>
    )
}