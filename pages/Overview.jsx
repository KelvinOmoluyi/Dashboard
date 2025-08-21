import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { BsThreeDots } from 'react-icons/bs';
import { dashboardStats, countrySession, transactions } from "../data/index"
import { Button, LineGraph, StatusIndicator } from "../components/index";
import { BiDownload } from 'react-icons/bi';
import { RiLoopLeftFill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { motion } from "framer-motion";


const Overview = () => {
    const{ setNavbarIndicator } = useStateContext();

    useEffect(() => {
        setNavbarIndicator("overview")
    })

    return (
        <div className="w-full h-full overflow-hidden pb-4">
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
                                        <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: session.percentage+"%"}}
                                        transition={{ duration: session.percentage*0.025 }}
                                        className={`h-full bg-[#9061f6] rounded-full`}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full mt-4 bg-[#141415] p-4 rounded-[10px]">
                <div className="w-full flex justify-between items-center mb-2">
                    <h4>Transaction History</h4>
                    <div className="w-fit flex items-center gap-3">
                        <Button text="Download" icon={BiDownload} width={140} height={40} bgColor="#282829" />
                        <Button text="Refresh" icon={RiLoopLeftFill} width={110} height={40} bgColor="#9061f6" />
                            <BsThreeDots size={25} color="#ececec" />
                    </div>
                </div>
                <table className="w-full">
                    <tr className="w-full h-[3rem] bg-[#282829] rounded-md flex items-center justify-between px-4 mt-4">
                        <td className="w-[40%]"><p>Product name</p></td>
                        <div className="w-[60%] flex items-center">
                            <td className="w-[20%]"><p>Order amount</p></td>
                            <td className="w-[18%]"><p>Date</p></td>
                            <td className="w-[18%]"><p>Status</p></td>
                            <td className="w-[54%]"><p>Emmulated by</p></td>
                        </div>
                    </tr>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="w-full h-[4rem] border-[#282829] bg-bottom-1 rounded-md flex items-center justify-between px-4 mt-4">
                            <td className="w-[40%]"><p>{transaction.product}</p></td>
                            <div className="w-[60%] flex items-center">
                                <td className="w-[20%]"><p>{transaction.amount}</p></td>
                                <td className="w-[18%]"><p>{transaction.date}</p></td>
                                <td className="w-[20%]">
                                    <StatusIndicator status={transaction.status} />
                                </td>
                                <td className="w-[38%] flex gap-4">
                                    <img src={transaction.picture} alt="customer picture" style={{ height: "3rem", aspectRatio: "1/1", borderRadius: "50%" }} />
                                    <div>
                                        <p>{transaction.customer}</p>
                                        <h6>{transaction.email}</h6>
                                    </div>
                                </td>
                                <td className="w-[16%]">
                                    <Button 
                                    textFirst={true} 
                                    text="More" 
                                    icon={MdArrowDropDown} 
                                    bgColor="#282829" 
                                    height={40} 
                                    width={100} 
                                    align="center" />
                                </td>
                            </div>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}
 
export default Overview;