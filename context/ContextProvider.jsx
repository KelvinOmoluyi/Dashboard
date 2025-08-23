import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({children}) => {
    const[navbarIndicator, setNavbarIndicator] = useState("overview");
    const[isSidebarActive, setIsSidebarActive] = useState(true);

    const handleResize = (size) => {
        if(size <= 1034){
            setIsSidebarActive(false)
        } else {
            setIsSidebarActive(true)
        }
    }

    const handleSideBar = () => {
        setIsSidebarActive((prev) => !prev);
    }

    return <StateContext.Provider
    value={{ navbarIndicator, setNavbarIndicator, isSidebarActive, setIsSidebarActive, handleResize, handleSideBar }}
    >
        {children}
    </StateContext.Provider>
}
 
export const useStateContext = () => useContext(StateContext);
export default ContextProvider;