import { SearchBar } from "./index"
import { MdNotificationsNone } from 'react-icons/md';
import { MdOutlineAnalytics } from 'react-icons/md';

function NavBar() {
  return (
    <div className="w-full h-13 flex justify-between">
      <h2>Dashboard</h2>
      <div className="flex gap-2">
        <SearchBar />
        <div className="size-10 bg-[#141415] rounded-full flex items-center justify-center">
          <MdNotificationsNone size={25} color="#cccccc" />
        </div>
        <div className="size-10 bg-[#141415] rounded-full flex items-center justify-center">
          <MdOutlineAnalytics size={25} color="#cccccc" />
        </div>
        <div className="size-10 bg-[#141415] rounded-full flex items-center justify-center">
          <img style={{ height: 40, width: 40, borderRadius: "50%" }} src="https://kelvinportfolio01.netlify.app/img/portfolio-about-pic.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar