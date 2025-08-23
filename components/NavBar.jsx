import { SearchBar } from "./index"
import { MdNotificationsNone } from 'react-icons/md';
import { MdOutlineAnalytics } from 'react-icons/md';
import avatarImg from "../data/images/my-pic.jpg"
import { BsCalendar } from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';
import { Button } from '../components';
import { BiShare } from 'react-icons/bi';
import { motion } from "framer-motion"
import { useStateContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  const { navbarIndicator, handleSideBar } = useStateContext()
  const[navIndicatorState, setnavIndicatorState] = useState({
    translate: 0, width: 80
  })

  useEffect(() => {
    if (navbarIndicator == "overview") setnavIndicatorState({translate: 0, width: 80})
    if (navbarIndicator == "notifications") setnavIndicatorState({translate: 80, width: 120})
    if (navbarIndicator == "trade") setnavIndicatorState({translate: 210, width: 110})
  }, [navbarIndicator])

  return (
    <>
      <div className="w-full h-13 flex justify-between dashboardHeader content">
        <div className="flex gap-4 items-center">
          <button 
          onClick={handleSideBar}
          className="size-10 bg-[#141415] rounded-full flex hover:cursor-pointer items-center justify-center">
            <GiHamburgerMenu size={20} color="#ffffff" />
          </button>
          <h2>Dashboard</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          <SearchBar />
          <Link to="/dashboard/notifications">
            <div className="size-10 bg-[#141415] rounded-full flex hover:cursor-pointer items-center justify-center">
              <MdNotificationsNone size={25} color="#cccccc" />
            </div>
          </Link>

          <Link to="/dashboard/trade-history">
            <div className="size-10 bg-[#141415] rounded-full flex hover:cursor-pointer items-center justify-center">
              <MdOutlineAnalytics size={25} color="#cccccc" />
            </div>
          </Link>
          <div className="size-10 bg-[#141415] hover:cursor-pointer rounded-full flex items-center justify-center">
            <img style={{ height: 40, width: 40, borderRadius: "50%" }} src={avatarImg} alt="" />
          </div>
        </div>
      </div>

      <div className="mb-4 content">
            <div className='flex items-center justify-between navIndicator'>
                <div 
                style={{ fontSize: "1rem", color: "#b3b3b3"}}
                className="flex gap-4 mt-4">
                    <Link to="/dashboard/overview">
                        <span style={{ color: `${navbarIndicator === "overview" ? "#ececec" : ""}` }}>Overview</span>
                    </Link>
                    <Link to="/dashboard/notifications">
                        <span style={{ color: `${navbarIndicator === "notifications" ? "#ececec" : ""}` }}>Notifications</span>
                    </Link>
                    <Link to="/dashboard/trade-history">
                        <span style={{ color: `${navbarIndicator === "trade" ? "#ececec" : ""}` }}>Trade history</span>
                    </Link>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <div className='h-[40px] w-fit flex items-center gap-2 bg-[#141415] rounded-md px-3 navbarDateTime'>
                        <BsCalendar size={15} color="#b3b3b3" />
                        <h6>28th August - 16th December 2024</h6>
                    </div>
                    <div className='h-[40px] w-fit flex items-center gap-2 bg-[#141415] rounded-md px-3'>
                        <BsFilter size={20} color="#b3b3b3" />
                        <h6>Filter</h6>
                    </div>
                    <Button bgColor="#9061f6" icon={BiShare} text="share" />
                </div>
            </div>
            <div className='w-full h-1 bg-gray-900 rounded-2xl mt-2 mx-auto'>
                <motion.div 
                className='h-full w-20 bg-[#9061f6]'
                initial={{ translateX: 0 }}
                animate={{ translateX: navIndicatorState.translate, width: navIndicatorState.width }}
                />
            </div>
      </div>
    </>
  )
}

export default NavBar