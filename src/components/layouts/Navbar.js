import React, { Component } from 'react'
import Logo from './Logo'
// import { Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SearchInput from './SearchInput';

class Navbar extends Component {
    state = {
        sideBox: false
    }
    toggleSide =  (e) => {
        this.setState({
            sideBox : !this.state.sideBox
        })
    }
    render() {
        // if (!this.props.loggedIn) {
        //     return <Redirect to={"/login"} />
        // }
        return (
            <div>
                <div className="top-nav">
                    <Logo />
                    <div className="right-top-nav">
                        <div className={this.state.sideBox ? 'box-menu active' : 'box-menu'}>
                            <p onClick={this.toggleSide}>John Doe { this.state.sideBox ? <FaChevronDown></FaChevronDown> : <FaChevronUp></FaChevronUp>}  </p>
                            <ul>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <li><Link to="/signout">Sign Out</Link></li>
                            </ul>
                        </div>
                        <i>
                            <FaCog />
                        </i>
                    </div>
                </div>
                <div className="bottom-nav">
                    <div className="links-cover">
                        <li><NavLink to="/">Dashboard</NavLink></li>
                        <li><NavLink to="/messages">Messages</NavLink></li>
                        <li><NavLink to="/invoices">Invoices</NavLink></li>
                        <li><NavLink to="/jobs">Jobs</NavLink></li>
                    </div>
                    <div className="input-flex">
                        <SearchInput></SearchInput>
                    </div>          
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
        loggedIn: state.auth.loggedIn
    }
}


export default connect(mapStateToProps)(Navbar);
