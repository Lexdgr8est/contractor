import React from 'react'
import Header from '../layouts/Header'
import PageBanner from '../layouts/PageBanner'
import  { data }  from '../../assets';
import Footer from '../layouts/Footer';

function Contact() {
    return (
        <div>
            <Header />
            <PageBanner children="Contact ECASH2NAIRA" imgSrc={data.contact}/>
            <div className="contact-cover">
                    <div className="part">
                        <h3>HEAD OFFICE</h3>
                        <div className="content-grid g-d g-2">
                            <div className="contents">
                                <p>No 23 Agodogba Avenue Park View Estate</p>
                                <p>Ikoyi, Lagos</p>
                                <p>Nigeria</p>
                            </div>
                            <div className="part-content">
                                <a href="mailto:support@primeoptions.exchange" className="icon-cover">
                                    <i className="fa fa-user"></i>
                                    <p>support@primeoptions.exchange</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="form-cover center">
                        <form action="">
                            <h3>LEAVE US YOUR INFO</h3>
                            <p>And We will get back to you.</p>
                            <div className="field">
                                <label for="">Full Name</label>
                                <input type="text" placeholder="Enter your Full Name" name="fullname" />
                            </div>
                            <div className="field">
                                <label for="">Email</label>
                                <input type="text" placeholder="Enter your Email" name="email" />
                            </div>
                            <div className="field">
                                <label for="">Subject</label>
                                <input type="text" placeholder="Enter your Subject" name="subject" />
                            </div>
                            <div className="field">
                                <label for="">Message</label>
                                <textarea className="medium" placeholder="Enter your Message" name="message"></textarea>
                            </div>
                            <button id="sendBtn">Send</button>
                        </form>
                    </div>    
            </div>
            <Footer />
            </div>
    )
}


export default Contact