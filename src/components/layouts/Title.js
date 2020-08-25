import React from 'react'
import { Link } from 'react-router-dom'

export default function Title({children, anchor = ''}) {
    return (
        <div className="title">
            {children}
            <Link to="/">{anchor}</Link>
        </div>
    )
}
