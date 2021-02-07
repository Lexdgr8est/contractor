import React from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import  { Link } from 'react-router-dom';
import { data } from '../../assets';
function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="form-area">
            <Header />
            <div className="form-container">
                <div className="form-body">
                    <div className="form-grid">
                        <form onSubmit={handleSubmit}>
                            <h1>Register</h1>
                            <div className="field">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="field">
                                <input type="Number" placeholder="Phone Number" />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Enter Password" />
                            </div>
                            <button>Register</button>
                            <p>By creating an account, I agree to Pngtree's Terms of Service, Privacy Policy and Intellectual Property Rights</p>
                            <p> Already have an account? <Link to="/login"> Log in </Link></p>
                        </form>
                    </div>
                    <div className="form-grid">
                            <img src={data.register} alt="Register"/>
                            
                            <div className="random-texts">
                                <h3>eCash2Naira</h3>
                                <div className="row">
                                    <p>Airtime Recharge</p>
                                    <p>Data Refill</p>
                                </div>
                                <div className="row">
                                    <p>MTN</p>
                                    <p>GLO</p>
                                    <p>AIRTEL</p>
                                </div>
                                <div className="row">
                                    <p>DSTV</p>
                                    <p>GOTV</p>
                                </div>
                                <div className="row">
                                    <p>IBEDC</p>
                                    <p>IE</p>
                                    <p>EKEDC</p>
                                    <p>EEDC</p>
                                </div>
                                <div className="row">
                                    <p>Amazon</p>
                                    <p>Google Play</p>
                                    <p>iTunes</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
