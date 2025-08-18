import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Overview = () => {
    const{ setNavbarIndicator } = useStateContext();

    useEffect(() => {
        setNavbarIndicator("overview")
    })

    return (
        <h5>Overview</h5>
    );
}
 
export default Overview;