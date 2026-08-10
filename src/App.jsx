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
import { createContext, useReducer, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import UseReducer from "./components/UseReducer";
import Profile from "./pages/Profile";
import Settings from "./components/Settings";
import Product from './pages/Product';
import Checkout from "./components/Checkout";
export const userContext = createContext()


function App() {
  return(
  <>
  <userContext.Provider value="guest">
      <Checkout/>
  </userContext.Provider> 
 
  {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="profile" element={<Profile/>}/>
              <Route path="settings" element={<Settings/>}/>
           </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  </BrowserRouter> */}
  
     
  </>

  )
}

export default App;
