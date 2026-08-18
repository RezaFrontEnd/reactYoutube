// import { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";
import UseLocalStorage from "../hooks/UseLocalStorage";
import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState("");
  const [user,setUser] = UseLocalStorage()
  // const { state, dispatch } = useContext(UserContext);

  function handlesubmit()
  {
    // dispatch({type: "login",payload: value,});}
    setUser(value)
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ border: "1px solid black" }}
/>
        <button type="submit" onClick={()=>handlesubmit}>Login</button>
      </form>
      user:{user}
    </div>
  );
}