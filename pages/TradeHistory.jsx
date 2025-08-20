import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { BsThreeDots } from 'react-icons/bs';
import { transactions } from "../data/index"
import { Button } from "../components/index";
import { BiDownload } from 'react-icons/bi';
import { RiLoopLeftFill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';

const TradeHistory = () => {
    const{ setNavbarIndicator } = useStateContext();
    
    useEffect(() => {
        setNavbarIndicator("trade")
    })

    return (
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
                                <div className={`flex items-center p-4 rounded-[30px] bg-[${
                                transaction.status === "Pending"
                                ? "#414141"
                                : transaction.status === "Processing"
                                ? "#FFA500"
                                : transaction.status === "Completed"
                                ? "#16a34a"
                                : "#555555"}]`}>
                                    <BsDot size={30} color="#ececec" />
                                    <h6>{transaction.status}</h6>
                                </div>
                            </td>
                            <td className="w-[38%] flex gap-4">
                                <img src={transaction.picture} alt="customer picture" style={{ height: "3rem", aspectRatio: "1/1", borderRadius: "50%" }} />
                                <div>
                                    <p>{transaction.customer}</p>
                                    <h6>{transaction.email}</h6>
                                </div>
                            </td>
                            <td className="w-[16%]">
                                <Button textFirst={true} text="More" icon={MdArrowDropDown} bgColor="#282829" height={40} width={100} align="center" />
                            </td>
                        </div>
                    </tr>
                ))}
            </table>
        </div>
    );
}
 
export default TradeHistory;