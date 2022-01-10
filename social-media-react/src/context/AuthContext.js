import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//we have a user 
// when he enters his credentials to log in 
// when he clicks log in 
// we are going to our actions, dispatch the action
// then hit hte reducer and it will decide which property to update
// if fetching is true
// we fetch user
// now user is the user logged in 
// if user is success full logging there is no more fetching and no error
// user can log in