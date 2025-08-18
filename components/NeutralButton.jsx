import { motion } from "framer-motion"

const NeutralButton = ({ text, icon }) => {

    const Icon = icon || null;

    return (
        <motion.button
        className='text-gray-900 py-[5px] w-fit font-semibold px-3 bg-white rounded-md flex items-center justify-start pl-2 gap-2'
        transition={{ duration: 0.15 }}
        whileHover={{ boxShadow: '0 0 10px white' }}
        >
            {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
            <span>{text}</span>
        </motion.button>
    )
}

export default NeutralButton