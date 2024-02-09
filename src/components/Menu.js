import React, { useState } from 'react'
import MenuButton from './MenuButton'
import '../App.css'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'

const variants = {
    open: {
        height: 352,
        width: 200,
        top: '-5px',
        right: '-5px',
        transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
    },
    close: {
        width:80,
        height:32,
        top: '0px',
        right: '0px',
        transition: {duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
    }
}

const Menu = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='menu'>
            <motion.div className="menu-box"
                variants={variants}
                animate={isActive ? "open" : "close"}
                initial='close'
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <MenuButton isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}

export default Menu
