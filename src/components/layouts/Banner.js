import React from 'react'
import { Link } from 'react-router-dom'
import  { data }  from '../../assets';
export default function Banner() {
    return (
        <div className="banner">
            <img src={data.Banner} alt="banner" />
            <div className="banner-content">
                <div className="banner-left">
                    <div className="banner-text">
                        <h1>
                            WELCOME TO eCASH2NAIRA
                        </h1>
                        <p>eCash2Naira is here to make your online transactions ranging from buying of cryptocurrencies, giftcard exchange, airtime recharge and cable subscription easy and convinient from the comfort of your home.</p>
                        <Link to="/">Get Started</Link>
                    </div>
                </div>
                <div className="banner-right">
                    <img src={data.darkMockUp} alt="mockup"></img>
                </div>
            </div>
        </div>
    )
}
