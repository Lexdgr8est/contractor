import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../layouts/Navbar';
import Notifications from './Notifications';
import Payments from './Payments';
import ActiveJobs from './ActiveJobs';
export class Dashboard extends Component {
    render() {
        
        return (
            <div>
                <Navbar />
                <div className="central-cover">
                    <div className="g-d g-t-c-3 inner-central-cover dashboard">
                        <div className="side-dashboard">
                            <Notifications />
                        </div>
                        <div className="center-dashboard">
                            <div className="top-central grey">
                                <ActiveJobs />
                            </div>
                            <div className="bottom-central">
                                
                            </div>
                        </div>
                        <div className="side-dashboard">
                            <Payments />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Dashboard);