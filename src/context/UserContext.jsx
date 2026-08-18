import { createContext, useReducer } from "react";
const UserContext = createContext();

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {user:null});
  function userReducer(state,action)
  {
    if(action.type == "login")
      {
        return{user:action.payload}
      }
    if(action.type == "logout")
      {
        return{user:"guest"}
      }                       
  }
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };