
import { createContext, useReducer, useContext } from "react";
import initialState from "./Reducer"
import Reducer from './Reducer'
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalContext.Provider value={{ basket: state.basket,favourite:state.favourite, user: state.user, dispatch:dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext)
}


