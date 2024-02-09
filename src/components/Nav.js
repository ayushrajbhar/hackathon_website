import React from 'react'
import { motion } from 'framer-motion'

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        transition: {duration: 0.65, opacity: {duration: 0.35}, delay: 0.5 + (i*0.1), ease: [.225, .51, .355, 1]}
    }),
    exit: {
        opacity: 0
    }
}

const Nav = () => {
    const data = [
        {
            title: 'Register',
            href: '#register'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Domains',
            href: '#domain'
        },
        {
            title: 'Prizes',
            href: '#prizes'
        },
        {
            title: 'Timeline',
            href: '#timeline'
        },
        {
            title: 'Sponsors',
            href: '#sponsors'
        },
        {
            title: 'FAQs',
            href: '#faqs'
        },
        {
            title: 'Contact',
            href: '#contact'
        },
    ]

    return (
        <div className='nav'>
            <div className="nav-body">
                {
                    data.map((link, i) => {
                        return (
                            <div className="link-container" key={i}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    animate='enter'
                                    exit='exit'
                                    initial='initial'
                                >
                                    <a className='links' href={link.href}>{link.title}</a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav
