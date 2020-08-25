import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getActiveJobs } from '../../store/actions/activeJobsActions';
import ActiveJobsLayout from '../layouts/ActiveJobs/ActiveJobsLayout';
import Title from '../layouts/Title';
export class ActiveJobs extends Component {
    componentDidMount() {
        this.props.getActiveJobs();
    }
    render() {
        console.log(this.props);
        if(this.props.activeJobs.hasOwnProperty('activeJobs')) {
            return (
                <div className="grey-section">
                    <Title children="Active Jobs" anchor="View All" />
                    <ActiveJobsLayout activeJobs={this.props.activeJobs}></ActiveJobsLayout>
                </div>
            )
        }else {
            return (
                <p>Whats up</p>
            )
        }
        // return (
        //     <p>Active Jobs</p>
        // )
    }
}

const mapStateToProps = (state) => {
    return {
        activeJobs: state.activeJobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActiveJobs: () => dispatch(getActiveJobs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveJobs)
