import { useEffect, useState } from "react";
import { BsDot } from 'react-icons/bs';


const StatusIndicator = ({status}) => {
    const[indicator, setIndicator] = useState("")

    useEffect(() => {
        if (status == "Processing") {
            setIndicator("#b3b3b3")
        }
        if (status == "Completed") {
            setIndicator("#16a34a")
        } 
        if (status == "Pending") {
            setIndicator("#FFA500")
        }
    })

    return (
        <div 
        style={{ color: indicator, backgroundColor: indicator+"31" }}
        className={`flex items-center p-[2px] pr-[10px] w-fit rounded-[30px]`}>
            <BsDot size={30} color="#ececec" />
            <span style={{ fontSize: "0.8rem", fontWeight: 500 }}>{status}</span>
        </div>
    );
}
 
export default StatusIndicator;