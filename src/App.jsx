import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Logout from "./components/Logout";
import { UserProvider } from "./context/UserContext";
import { useState } from "react";
import UseDisplayMessage from "./hooks/UseDisplayMessage";
import Message from './components/Message';
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponentt from './components/ConditionalComponentt';
import CounterTrain from './components/train/CounterTrain';

function App() {
    
    return(
      <div>
         {/* <FunctionalCounter/> */}
         {/* <ConditionalComponentt/> */}
         <CounterTrain/>
      </div>
    )

  
}

export default App;