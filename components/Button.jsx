import { motion } from "framer-motion";

const Button = ({ height, width, text, icon, bgColor, textFirst, align }) => {

    const Icon = icon || null;

  return (
    <motion.button 
    style={width ? { height, width } : { width: "fit-content", paddingRight: 15, paddingLeft: 10 }} 
    className={`text-gray-300 bg-[${bgColor ? bgColor : "none"}] hover:text-white rounded-md flex justify-${align === "center" ? "center" : "start"} items-center pl-2 gap-2`}
    transition={{ duration: 0.15 }}
    whileHover={{ backgroundColor: '#9061f6', cursor: "pointer" }}
    >
      {textFirst ? (
        <>
          <span>{text}</span>
          {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
        </>
      ) : (
        <>
          {icon && <Icon size={20} className='text-gray-300 hover:text-white' />}
          <span>{text}</span>
        </>
      )}
    </motion.button>
  )
}

export default Button