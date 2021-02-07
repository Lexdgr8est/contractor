import React from 'react'
import Header from '../layouts/Header'
import PageBanner from '../layouts/PageBanner'
import  { data }  from '../../assets';
import Footer from '../layouts/Footer';

function About() {
    return (
        <>
        <Header />
        <PageBanner children="About ECASH2NAIRA" imgSrc={data.about}/>
        <div className="about-cover">
            <div className="text-cover">
                <h1>About Our Trading Platform</h1>
                <p>We are undoubtably the most reliable platform to trade all forms of Gift card. We are Direct iTunes gift Card loaders in Nigeria, So there is no need to go through middle men service again, when you can easily trade with us at the best rates ever.</p>
                <p>We Trade almost all forms of gift cards in Nigeria, From iTunes Gift Card to Amazon gift card, To Walmart gift card, All Denominations of Cards are acceptable.</p>
            </div>
            <div className="text-grid light-grey">
                <div className="text-part">
                    <img src={data.wallet} alt="hand cash"/>
                </div>
                <div className="text-part">
                    <h1>WHAT WE DO?</h1>
                    <p>Here at ecash2naira, we support the African possessions in terms of E-commerce, crypto currency and human resources. We set out to create the perfect market; A Safe, Secure and Interactive space that can usher Africa into the Digital Age.</p>
                    <p>We are one of the most trusted fully automated cryptocurrency company that exchange bitcoin and gift cards to instant cash directly to your local bank account. and also provide POS services.</p>
                </div>
                <div className="text-part">
                    <img src={data.pos} alt="pos"/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}


export default About