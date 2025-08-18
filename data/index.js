import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { MdOutlineSell } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineAnalytics } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiFlowerLine } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa6';

export const sidebarData = [{
    properties: {
        height: "35px",
        width: "100%",
    },
    datas: [
        {
            id: 1,
            text: "Dashboard",
            icon: MdOutlineSpaceDashboard,
        },
        {
            id: 2,
            text: "Sales",
            icon: MdOutlineSell,
        },
        {
            id: 3,
            text: "Analytics",
            type: "dropdown",
            icon: MdOutlineAnalytics,
            dropdownIcon: RiArrowDropDownLine,
            dropdownData: ["Product", "Store", "Visitor"]
        },
        {
            id: 4,
            text: "Enrich",
            type: "dropdown",
            icon: RiFlowerLine,
            dropdownIcon: RiArrowDropDownLine,
            dropdownData: ["Product", "Store", "Visitor"]
        },
        {
            id: 5,
            text: "Delivery",
            icon: TbTruckDelivery,
        },
        {
            id: 6,
            text: "Integration",
            icon: FaLink,
        },
    ]}
]

export const neutralButton = [
    {
        id: 1,
        text: "Upgrade now"
    }
]

import logo from "./images/logo.png";
export { logo };