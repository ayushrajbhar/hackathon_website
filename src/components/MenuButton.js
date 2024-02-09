import React from 'react'
import '../App.css'
import { motion } from 'framer-motion'

const MenuButton  = ({ isActive, setIsActive }) => {
    return (
        <div className='menu-button' onClick={() => setIsActive(!isActive)}>
            <motion.div className="slider"
                animate={{top: isActive ? "-100%" : "0"}}
                transition={{duration: 0.3, ease: [0.76, 0, 0.24, 1]}}
            >
                <div className='menu-button-slide'>
                    <p>MENU</p>
                </div>
                <div className='menu-button-slide'>
                    <p>CLOSE</p>
                </div>
            </motion.div>
        </div>
    )
}

export default MenuButton 
