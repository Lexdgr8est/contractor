import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../assets'
import {motion} from 'framer-motion';
export default function Title({children, anchor = ''}) {
    return (
        <div className="title">
            {children}
            <Link to="/">{anchor}</Link>
            <motion.img 
                animate={{rotate: 360,
                    transition: {
                        yoyo: Infinity,
                        duration: .7
                    }
                }}
            src={data.Logo} alt="logo" />
        </div>
    )
}
