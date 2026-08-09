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
// import SearchFood from "./components/recipeApp/SearchFood";
// import FoodList from "./components/recipeApp/FoodList";
// import Nav from "./components/recipeApp/Nav";
// import Container from './components/recipeApp/Container';
// import InnerContainer from './components/recipeApp/InnerContainer';
// import FoodDetail from './components/recipeApp/FoodDetail';
import { useReducer, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";


function App() {
   // function reducer(state,action)
   // {
   //    if(action.type == "add")
   //    {
   //       return{...state,balance:state.balance + action.payload }
   //    }
   //    if(action.type == "sub")
   //       {
   //          return{...state,balance:state.balance - action.payload }
   //       }
   // }
   // const [state,dispatch] = useReducer(reducer,{balance:0})
   // const [amount,setAmount] = useState(0)


  return(
  <> 
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  </BrowserRouter>
      {/* {state.balance}<br/> 
      <input type="text" onChange={(e)=>setAmount(e.target.value)} value={amount} 
      className="border-1 rounded-lg"  />
      <button onClick={()=>dispatch({type:"add",payload:Number(amount)})} 
      className="border-1 rounded-lg">deposit</button>
      <button onClick={()=>dispatch({type:"sub",payload:Number(amount)})} className="border-1 rounded-lg">widraw</button> */}
  </>

  )
}

export default App;

//   const [foodData,setFoodData] = useState([])
//   const [foodId,setFoodId] = useState("")
//    const [state,dispatch] = useReducer(reducer,{count:0,IncrementBy:1})
//    function reducer(state,action)
//    {
//       if(action.type == "increment")
//          {
//             return{...state,count:state.count + state.IncrementBy}
//          }
//       if(action.type == "decrement")
//          {
//             return{...state,count:state.count - state.IncrementBy}
//          }   
//       if(action.type == "setIncrement")
//          {
//             return{...state,IncrementBy:action.payload}
//          }   
//    }
     {/* <Nav></Nav>
     <SearchFood foodData={foodData} setFoodData={setFoodData}/>
     <Container>
         <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
         </InnerContainer>
         <InnerContainer>
            <FoodDetail foodId = {foodId}  />
         </InnerContainer>
     </Container> */}
     {/* {state.count}<br/>
     <input type="text"value={state.IncrementBy} 
     onChange={(e)=>dispatch({type:"setIncrement",payload:Number(e.target.value)})} 
     className="border-1 rounded-lg" />
    <button onClick={()=>dispatch({type:"increment",payload:1})
      } className="border-1 rounded-lg">increment</button>
    <button onClick={()=>dispatch({type:"decrement",payload:1})} className="
    mt-2 border-1 rounded-lg">decrement</button><br/> */}
