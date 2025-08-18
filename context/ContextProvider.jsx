import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({children}) => {
    const[navbarIndicator, setNavbarIndicator] = useState("overview");

    return <StateContext.Provider
    value={{ navbarIndicator, setNavbarIndicator }}
    >
        {children}
    </StateContext.Provider>
}
 
export const useStateContext = () => useContext(StateContext);
export default ContextProvider;