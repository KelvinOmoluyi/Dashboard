import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { MdOutlineSell } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineAnalytics } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiFlowerLine } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa6';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { RiCoinsFill } from 'react-icons/ri';
import { FaChartArea } from 'react-icons/fa';
import americaFlag from "./images/americaFlag.jpg"
import japanFlag from "./images/japanFlag.jpg"
import koreaFlag from "./images/koreaFlag.webp"
import germanyFlag from "./images/germanyFlag.png"

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

export const dashboardStats = [
    {
        id: 1,
        Icon: FaMoneyBillAlt,
        desc: "Total income",
        amount: "$342,261",
        percentage: "17.01%",
        stat: "gain",
        comparison: "Compared to last month"
    },
    {
        id: 2,
        Icon: FaWallet,
        desc: "Profit",
        amount: "$15,708.98",
        percentage: "8.12%",
        stat: "gain",
        comparison: "Compared to last month"
    },
    {
        id: 3,
        Icon: RiCoinsFill,
        desc: "Total revenue",
        amount: "7.415.644",
        percentage: "17.01%",
        stat: "loss",
        comparison: "Compared to last month"
    },
    {
        id: 4,
        Icon: FaChartArea,
        desc: "Total convertion",
        amount: "10.87%",
        percentage: "25.43%",
        stat: "gain",
        comparison: "Compared to last month"
    },
]

export const countrySession = [
    {
        id: 1,
        country: "United States",
        flag: americaFlag,
        percentage: 85
    },
    {
        id: 2,
        country: "Japan",
        flag: japanFlag,
        percentage: 70
    },
    {
        id: 3,
        country: "Germany",
        flag: germanyFlag,
        percentage: 45
    },
    {
        id: 4,
        country: "South Korea",
        flag: koreaFlag,
        percentage: 33
    },
]

import logo from "./images/logo.png";
export { logo };