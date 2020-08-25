import React, { Component } from 'react'
import Logo from './layouts/Logo';
import loginBanner from '../images/login.jpg';
import { Link, Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
// import axios from 'axios';
class Login extends Component {
    state = {
        username: null,
        password: null
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.signIn(this.state);
    }
    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <div className="login-container g-d g-g-0 g-t-c-2">
                    <div className="inner-container center-content med-size">
                        <div>
                            <Logo></Logo>
                            <p>Improving the experience of managing temporary services</p>

                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <label>Username</label>
                                    <input type="text" id="username" onChange={this.handleInput}/>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" id="password" onChange={this.handleInput}/>
                                </div>

                                <div className="field-flex">
                                    <div>
                                        <input type="checkbox"   />
                                        <span>Save username</span>
                                    </div>
                                    <div>
                                        Forgot Password?
                                    </div>
                                </div>
                                { this.props.authError ? <p className="error-message">{ this.props.authError }</p> : null }
                                <button type="submit">Login</button>
                            </form>
                        </div>
                        <div className="float-div bottom med-size">
                            <Link to="/">Are you a new user?</Link>
                            <Link to="/">Request Access</Link>
                        </div>
                    </div>
                    <div className="inner-container full-img-container">
                        <img src={loginBanner} alt="Login Banner"/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        authError: state.auth.authError,
        loggedIn: state.auth.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);