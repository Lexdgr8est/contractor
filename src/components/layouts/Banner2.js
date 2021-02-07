import React from 'react'
import {data} from '../../assets'
import { Link } from 'react-router-dom'
function Banner2() {
    return (
        <div className="steps dark">
            <div className="step-intro">
                HOW TO ACCESS OUR SERVICES
            </div>
            <div className="steps-cover">
                <div className="step-part">
                    <div className="part">
                        <div className="step">
                             <h3>First Step</h3>
                            <p>Click <Link to="/register">here</Link> to register as a new customer or click <Link to="/login">here</Link> to login.</p>
                        </div>
                        <div className="step">
                            <h3>Third Step</h3>
                            <p>Login to your dashboard with your registration details to make use of our service</p>
                        </div>
                    </div>
                </div>
                <div className="step-part">
                    <div className="img-cover">
                        <img src={data.darkMockUp} alt="Banner"/>
                    </div>
                </div>
                <div className="step-part">
                    <div className="part">
                        <div className="step">
                            <h3>Second Step</h3>
                            <p>Login to your mail to confirm your account information.</p>
                        </div>
                        <div className="step">
                            <h3>Fourth Step</h3>
                            <p>Select any service of your choice and get paid instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
