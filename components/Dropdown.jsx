import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Button from './Button';

const Dropdown = ({ icon, text, width, height, isDropdown, dropdownData }) => {

    const Icon = icon || null;

    return (
        <motion.div 
        className="text-gray-300 hover:text-white rounded-md pl-2 gap-2"
        transition={{ duration: 0.3 }}
        >
            <div className='w-full flex items-center justify-between'>
                <div className="flex gap-2">
                    {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
                    <span>Analytics</span>
                </div>
                <motion.div
                animate={ isDropdown ? { rotate: "-90deg" } : { rotate: "0deg" }}
                transition={{ duration: 0.3 }}
                >
                    <RiArrowDropDownLine size={30} />
                </motion.div>
            </div>
            <motion.div 
            className='w-full overflow-hidden pl-4 pt-4'
            animate={ isDropdown ? { height: "fit-content" } : { height: "0px" }}
            transition={{ duration: 0.2 }}
            >
                <ul className='h-fit w-full flex flex-col'>
                    <Button text={text} width={width} height={height} />
                    <Button text={text} width={width} height={height} />
                    <Button text={text} width={width} height={height} />
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Dropdown