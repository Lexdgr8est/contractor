import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import  { data }  from '../../assets';
export default function Header() {
    return (
        <div className="app-header">
            <div className="logo-box">
                <Link to="/">
                    <img src={data.Logo} alt=""></img>    
                </Link>            
            </div>

            <nav>
                <div className="left-nav">
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/about">About</NavLink> </li>
                    <li> <NavLink to="/contact">Contact</NavLink> </li>
                </div>
                <div className="right-nav">
                    <h2><Link to="/register">Register</Link></h2>
                    <p>or</p>
                    <button><Link to="/login">Login</Link></button>
                </div>
            </nav>
        </div>
    )
}
