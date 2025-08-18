import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Notifications = () => {
    const{ setNavbarIndicator } = useStateContext();
    
    useEffect(() => {
        setNavbarIndicator("notifications")
    })

    return (
        <h5>Notifications</h5>
    );
}
 
export default Notifications;