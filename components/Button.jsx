import { motion } from "framer-motion";

const Button = ({height, width, text, icon}) => {

    const Icon = icon || null;

  return (
    <motion.button 
    style={{ height, width }} 
    className='text-gray-300 hover:text-white rounded-md flex items-center justify-start pl-2 gap-2'
    transition={{ duration: 0.15 }}
    whileHover={{ backgroundColor: '#9061f6' }}
    >
        {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
        <span>{text}</span>
    </motion.button>
  )
}

export default Button