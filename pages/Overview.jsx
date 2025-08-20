import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { BsThreeDots } from 'react-icons/bs';
import { dashboardStats } from "../data/index"

const Overview = () => {
    const{ setNavbarIndicator } = useStateContext();

    useEffect(() => {
        setNavbarIndicator("overview")
    })

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full grid grid-cols-4 gap-5">
                {dashboardStats.map((dashboardStat) => (
                    <div className="w-[100%] h-60 bg-[#141415] border-1 border-gray-800 rounded-[10px] p-4 hover:bg-gradient-to-b from-[#9061f6] to-[#141415] transition-all transition-2">
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className=" w-full flex items-start justify-between">
                                <div className="p-3 bg-[#313131] rounded-full">
                                    <dashboardStat.Icon color="#9061f6" size={30} />
                                </div>
                                <BsThreeDots size={25} color="#ececec" />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h6>{dashboardStat.desc}</h6>
                                <div className="w-full flex items-center gap-2">
                                    <h2>{dashboardStat.amount}</h2>
                                    <div>
                                        <h6 style={dashboardStat.stat === "gain" ? { color: "limegreen" } : { color: "pink" }}>{dashboardStat.percentage}</h6>
                                    </div>
                                </div>
                                <h6>{dashboardStat.comparison}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full mt-4">
                
            </div>
        </div>
    );
}
 
export default Overview;