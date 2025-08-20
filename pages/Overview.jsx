import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { BsThreeDots } from 'react-icons/bs';
import { dashboardStats, countrySession } from "../data/index"
import { LineGraph } from "../components/index";


const Overview = () => {
    const{ setNavbarIndicator } = useStateContext();

    useEffect(() => {
        setNavbarIndicator("overview")
    })

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full grid grid-cols-4 gap-5">
                {dashboardStats.map((dashboardStat) => (
                    <div key={dashboardStat.id} className="w-[100%] h-60 bg-[#141415] border-1 border-gray-800 rounded-[10px] p-4 hover:bg-gradient-to-b from-[#9061f6] to-[#141415] transition-all transition-2">
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

            <div className="w-full mt-4 flex justify-between gap-4">
                <div className="h-[26rem] w-[58%] bg-[#141415] p-4 rounded-[10px]">
                    <div className="w-full flex justify-between mb-2">
                        <h4>Analytics</h4>
                        <div className="flex gap-3">
                            <div className="px-3 py-[3px] rounded-md bg-[#1d1d1f]">
                                <h6>Sales estimation</h6>
                            </div>
                            <BsThreeDots size={25} color="#ececec" />
                        </div>
                    </div>
                    <LineGraph />
                </div>
                <div className="h-[26rem] w-[41%] bg-[#141415] p-4 rounded-[10px]">
                    <div className="w-full flex justify-between mb-2">
                        <h4>Session by country</h4>
                        <BsThreeDots size={25} color="#ececec" />
                    </div>
                    <ul className="w-full h-[90%] mt-3 flex flex-col justify-between">
                        {countrySession.map((session) => (
                            <li key={session.id} className="w-full flex items-center justify-between mb-4 gap-3">
                                <div className="w-[4rem] h-[4rem] p-[0.9rem] rounded-full bg-[#282829]">
                                    <img src={session.flag} alt="world-map" className="w-full h-full" />
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex items-center justify-between">
                                        <p>{session.country}</p>
                                        <p>{session.percentage}%</p>
                                    </div>
                                    <div className="w-full h-2 rounded-full mt-2 overflow-hidden bg-[#282829]">
                                        <div className={`h-full w-[${session.percentage}%] bg-[#9061f6] rounded-full`}></div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Overview;