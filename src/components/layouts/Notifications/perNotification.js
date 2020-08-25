import React from 'react'
import {FaSearchLocation, FaUserCircle, FaCheckSquare, Fa500Px } from 'react-icons/fa';
import { IconContext } from 'react-icons'

export default function perNotification(props) {
    const notification = props.notification;
    let icon;
    switch(notification.type) {
        case 'Found':
            icon = <FaUserCircle />
            break;
        case 'Location':
            icon = <FaSearchLocation />
            break;
        case 'Status':
            icon = <FaCheckSquare />
            break;
        default:
            icon = <Fa500Px /> 
    }
    return (
        <IconContext.Provider value={{style: {color: 'var(--logo-color)'} }}>
            <div className="notification">
                <div className="top">
                    <div className="text">
                        <i> {icon} </i>
                        <h3>{notification.title}</h3>
                    </div>
                    <div className="time">
                        <p>{notification.time}</p>
                    </div>
                </div>
                <div className="main-notification">
                    <p>{notification.details}</p>
                </div>
            </div>
        </IconContext.Provider>
    )
}
