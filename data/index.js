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
import japanFlag from "./images/JapanFlag.jpg"
import koreaFlag from "./images/koreaFlag.webp"
import germanyFlag from "./images/germanyFlag.png"
import customerPic from "./images/my-pic.jpg"

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
        percentage: 41
    },
    {
        id: 4,
        country: "South Korea",
        flag: koreaFlag,
        percentage: 33
    },
]

export const transactions = [
  {
    id: 1,
    product: "TSLA",
    type: "Stock",
    amount: "$15,331.00",
    date: "Dec 19, 2023",
    status: "Processing",
    customer: "Clata Ray",
    email: "clata@example.com",
    picture: customerPic
  },
  {
    id: 2,
    product: "MTCH",
    type: "Stock",
    amount: "$30,013.60",
    date: "Dec 15, 2025",
    status: "Completed",
    customer: "Lani Srilprom",
    email: "lani@example.com",
    picture: customerPic
  },
  {
    id: 3,
    product: "ABRC",
    type: "ETF",
    amount: "$13,645.30",
    date: "Dec 12, 3025",
    status: "Pending",
    customer: "Grant Vensen",
    email: "grant@example.com",
    picture: customerPic
  },
  {
    id: 4,
    product: "AAMC",
    type: "Stock",
    amount: "$22,663.40",
    date: "Dec 08, 2023",
    status: "Completed",
    customer: "Derrik Wilkinson",
    email: "derrik@example.com",
    picture: customerPic
  },
  {
    id: 5,
    product: "AMZN",
    type: "Stock",
    amount: "$48,210.75",
    date: "Jan 03, 2024",
    status: "Processing",
    customer: "Maria Lopez",
    email: "maria@example.com",
    picture: customerPic
  },
  {
    id: 6,
    product: "NFLX",
    type: "Stock",
    amount: "$9,876.20",
    date: "Feb 14, 2024",
    status: "Completed",
    customer: "John Kim",
    email: "john.kim@example.com",
    picture: customerPic
  },
  {
    id: 7,
    product: "MSFT",
    type: "Stock",
    amount: "$19,432.00",
    date: "Mar 02, 2024",
    status: "Processing",
    customer: "Elena Petrova",
    email: "elena@example.com",
    picture: customerPic
  },
  {
    "id": 8,
    "product": "BTC",
    "type": "Crypto",
    "amount": "$64,120.55",
    "date": "Mar 20, 2024",
    "status": "Completed",
    "customer": "Ali Hassan",
    "email": "ali@example.com",
    picture: customerPic
  }
]

// notifications.data.js
export const notifications = [
  {
    id: "n1",
    type: "system",              // system | billing | comment | mention | security | shipping
    title: "Analytics job finished",
    message: "Daily ingestion completed successfully (92,183 rows).",
    time: "2025-08-21T10:45:00Z",
    read: false,
    priority: "low",             // low | medium | high
    cta: { label: "View logs", href: "#" }
  },
  {
    id: "n2",
    type: "billing",
    title: "Invoice #INV-2087 paid",
    message: "Payment of $348.26 processed via ending ••42.",
    time: "2025-08-21T09:02:00Z",
    read: false,
    priority: "low",
    cta: { label: "Download", href: "#" }
  },
  {
    id: "n3",
    type: "mention",
    title: "You were mentioned by @Lani",
    message: "“Let’s ship the conversion card tweak behind a flag.”",
    time: "2025-08-21T07:18:00Z",
    read: true,
    priority: "low",
    cta: { label: "Open thread", href: "#" }
  },
  {
    id: "n4",
    type: "comment",
    title: "New comment on Session by Country",
    message: "Grant: “Bar thickness feels heavy at 85%. Reduce to 70%?”",
    time: "2025-08-20T18:30:00Z",
    read: false,
    priority: "medium",
    cta: { label: "Review", href: "#" }
  },
  {
    id: "n5",
    type: "security",
    title: "New sign‑in detected",
    message: "Chrome on Windows · Lagos, NG · IP 102.89.14.210",
    time: "2025-08-20T06:11:00Z",
    read: true,
    priority: "high",
    cta: { label: "Secure account", href: "#" }
  },
  {
    id: "n6",
    type: "shipping",
    title: "Dataset export is ready",
    message: "A CSV export of Transactions (Aug) is available.",
    time: "2025-08-19T21:04:00Z",
    read: true,
    priority: "low",
    cta: { label: "Download", href: "#" }
  },
  {
    id: "n7",
    type: "system",
    title: "Pipeline warning: slow query",
    message: "avg_exec_time increased to 1.8s on `sales_estimation_v3`.",
    time: "2025-08-18T15:25:00Z",
    read: false,
    priority: "medium",
    cta: { label: "Investigate", href: "#" }
  },
  {
    id: "n8",
    type: "billing",
    title: "Usage nearing limit",
    message: "You’ve used 83% of this month’s API quota.",
    time: "2025-08-16T12:00:00Z",
    read: true,
    priority: "medium",
    cta: { label: "View plan", href: "#" }
  }
];

export const typeIcon = {
  system:  "🟣",
  billing: "💳",
  comment: "💬",
  mention: "🔔",
  security:"🔒",
  shipping:"📦"
};

export const priorityPill = {
  low:    "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  medium: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
  high:   "bg-red-500/10 text-red-300 border border-red-500/20"
};


import logo from "./images/logo.png";
import { picture } from 'framer-motion/client';
export { logo };