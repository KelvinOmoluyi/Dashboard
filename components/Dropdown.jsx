import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Button } from './index';

const Dropdown = ({ icon, width, height, text, dropdownData }) => {
    const[isDropdown, setIsDropdown] = useState(false);

    const Icon = icon || null;

    return (
        <motion.div 
        className="text-gray-300 hover:text-white rounded-md gap-2"
        transition={{ duration: 0.3 }}
        >
            <motion.div  
            onClick={() => setIsDropdown((prev) => !prev)}
            style={{ height, width }}
            className='w-full flex items-center justify-between pl-2 rounded-md'
            whileHover={{ backgroundColor: '#9061f6' }}
            >
                <div className="flex items-center gap-2">
                    {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
                    <span>{text}</span>
                </div>
                <motion.div
                animate={ isDropdown ? { rotate: "-90deg" } : { rotate: "0deg" }}
                transition={{ duration: 0.3 }}
                >
                    <RiArrowDropDownLine size={30} />
                </motion.div>
            </motion.div>

            <motion.div 
            className='w-full overflow-hidden pl-4 pt-2'
            initial={{ height: "0px" }}
            animate={ isDropdown ? { height: "fit-content" } : { height: "0px" }}
            transition={{ duration: 0.2 }}
            >
                <ul className='h-fit w-full flex flex-col gap-3'>
                    {dropdownData.map((text, index) => (
                        <Button key={index} text={text} width={width} height={height} />
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Dropdown