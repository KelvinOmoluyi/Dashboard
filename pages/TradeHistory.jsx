import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const TradeHistory = () => {
    const{ setNavbarIndicator } = useStateContext();
    
    useEffect(() => {
        setNavbarIndicator("trade")
    })

    return (
        <h5>Trade History</h5>
    );
}
 
export default TradeHistory;