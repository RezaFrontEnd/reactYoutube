import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Logout from "./components/Logout";
import { UserProvider } from "./context/UserContext";
import { useState } from "react";
import UseDisplayMessage from "./hooks/UseDisplayMessage";
import Message from "./components/Message";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponentt from "./components/ConditionalComponentt";
import CounterTrain from "./train/CounterTrain";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./train/pages/Dashboard";
import Homepage from "./train/pages/Homepage";
import Settings from "./components/Settings";
import Profile from "./train/pages/Profile";

function App() {
  return (
    <div>
      {/* <CounterTrain/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Dashboard />} path="/dashboard">
            <Route element={<Settings />} path="settings" />
            <Route element={<Profile />} path="profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
