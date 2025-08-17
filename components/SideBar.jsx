import React, { useState } from "react"
import { logo, sidebarData } from "../data/index"
import Button from "./Button"
import Dropdown from "./Dropdown"

function SideBar() {
  const[isDropdown, setIsDropdown] = useState(true);

  return (
    <div className='bg-[#141415] w-[240px] text-white h-full p-4'>
      <div className='w-full h-[40px]'>
        <div className='h-full flex justify-between w-[110px] pl-2'>
          <img src={logo} alt="Logo" className='w-[30px] h-[25px]' />
          <h5>Apexify</h5>
        </div>
        <div>

        </div>
      </div>

      <div className="w-full h-fit mt-4">
        <ul className="flex flex-col gap-1.3">
          {sidebarData.map((dataSet, index) => (
            <React.Fragment key={index}>
              {dataSet.datas.map((data) => (
                data.dropdownData ? (
                  <li onClick={() => setIsDropdown((prev) => !prev)}>
                    <Dropdown icon={data.icon} isDropdown={isDropdown} width="100%" height="40px" dropdownData={data.dropdownData} text={data.text} />
                  </li>
                ) : (
                  <li key={data.id}>
                    <Button width={dataSet.properties.width} height={dataSet.properties.height} text={data.text} icon={data.icon} />
                  </li>
                )
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar