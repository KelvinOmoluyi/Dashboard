import React, { useState } from "react"
import { logo, sidebarData, neutralButton,  } from "../data/index.js"
import { Button, Dropdown, NeutralButton } from "./index.js"
import { HiMiniCube } from 'react-icons/hi2';
import { Switch } from '@headlessui/react';
import { AiOutlineMoon } from 'react-icons/ai';

const SideBar = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className='bg-[#141415] w-[240px] text-white flex flex-col gap-4 h-full p-2 pb-4 pt-4 overflow-scroll rounded-[8px]'>
      <div className='w-full min-h-[40px]'>
        <div className='h-full flex justify-between w-[110px] pl-2'>
          <img src={logo} alt="Logo" className='w-[30px] h-[25px]' />
          <h5>Apexify</h5>
        </div>
        <div>

        </div>
      </div>

      <div className="w-full flex flex-col flex-grow justify-between">
        <ul className="flex flex-col gap-3">
          {sidebarData.map((dataSet, index) => (
            <React.Fragment key={index}>
              {dataSet.datas.map((data) => (
                data.dropdownData ? (
                  <li key={data.id}>
                    <Dropdown icon={data.icon} width={dataSet.properties.width} text={data.text} height={dataSet.properties.height} dropdownData={data.dropdownData} />
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

        <div className="w-full h-fit mb-2">
          <div className="w-full h-38 flex flex-col justify-between p-2 bg-[#2e2f33] border-1 border-gray-600 rounded-[10px]">
            <div className="p-1 bg-gradient-to-br from-[#cdc14b] to-[#997acd] w-fit h-fit rounded-md">
              <HiMiniCube size={28} color="#550ca2" />
            </div>
            <p className="text-[15px]" style={{ color: "#ececec"}}>Get detailed analytics to help you</p>
            {neutralButton.map((data) => (
              <NeutralButton key={data.id} text={data.text} />
            ))}
          </div>
          <div className="w-full h-10 mt-3 flex justify-between items-center">
            <div className="flex gap-2 h-full items-center">
              <AiOutlineMoon size={20} className="text-gray-100" />
              <p>Dark mode</p>
            </div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-[#7a3fe6]"
            >
              <span className="size-5 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar