import React from 'react'
import { data } from '../../assets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="dark-bg">
            <div className="footer-cover">
                <div className="part">
                    <h3>Download our Mobile Apps</h3>   
                    <p>Our cross platform mobile applications make it possible for you to access our services. Available for iOS and Android operating systems.</p>
                    <div className="img-cover">
                         <img src={data.store} alt="stores"/>
                    </div>
                </div>
                <div className="part">
                    <div className="footer-banner">
                        <label>JOIN ECASH2NAIRA NOW</label>
                        <h1>Get started, your partnership with ecash2naira like the bosses do. Wait no more and make maximum profit.</h1>
                        <Link to="/register">Start Today</Link>
                    </div>
                </div>
                <div className="part">
                    <ul>
                        <h3>More Info</h3>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/cards"> Card Rates</Link>
                    </ul>    
                </div>           
            </div>
            <p>Ecash2Naira and it's related companies have no relation to Amazon, Apple, Walmart, Best-Buy or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone.</p>
        </footer>
    )
}

export default Footer
