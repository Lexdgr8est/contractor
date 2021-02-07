import React from 'react'
import { BsFillShieldLockFill, BsChatQuoteFill, BsPersonBoundingBox } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import Title from './Title'
function Features() {
    return (
        <div className="light-grey">
        <IconContext.Provider value={{style: { fontSize: '4em', color: '#333' }}}>
        <Title children="TRADING WITH ECASH2NAIRA"></Title>
        <div className="features-cover">
            <div className="feature">
                <i>
                    <BsFillShieldLockFill />
                </i>
                <h3>Secure Transactions</h3>
            </div>
            <div className="feature">
                <i>
                    <BsChatQuoteFill />
                </i>
                <h3>24/7 Customer Support</h3>
            </div>
            <div className="feature">
                <i>
                    <BsPersonBoundingBox />
                </i>
                <h3>User Friendly Interface</h3>
            </div>
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default Features
