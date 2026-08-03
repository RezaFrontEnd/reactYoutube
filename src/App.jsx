// import Hello from "./components/Hello";
// import Fruits from "./components/Fruits";
// import Train from "./components/Train";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import ConditionalComponent from "./components/ConditionalComponent";
// import InlineComponent from "./components/InlineComponent";
// import OutlineComponent from "./components/OutlineComponent";
// import Header from "./components/Header";
// import Todo from "./components/Todoapp/Todo";
// import TodoTrain from "./components/train/TodoTrain";
// import HeaderTrain from "./components/train/HeaderTrain";
// import Train from "./components/train/Train";
import { useState } from "react";
import SearchFood from "./components/recipeApp/SearchFood";
import FoodList from "./components/recipeApp/FoodList";
import Nav from "./components/recipeApp/Nav";
import Container from './components/recipeApp/Container';
import InnerContainer from './components/recipeApp/InnerContainer';
import FoodDetail from './components/recipeApp/FoodDetail';


function App() {
  const [foodData,setFoodData] = useState([])
  const [foodId,setFoodId] = useState("")
  return (
  <>
     <Nav></Nav>
     <SearchFood foodData={foodData} setFoodData={setFoodData}/>
     <Container>
         <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
         </InnerContainer>
         <InnerContainer>
            <FoodDetail foodId = {foodId}  />
         </InnerContainer>
     </Container>
     
  </>
  )
}

export default App;
