import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getNotifications } from '../../store/actions/notificationsActions';
import NotificationsLayout from '../layouts/Notifications/NotificationsLayout';
import Title from '../layouts/Title';
export class Notifications extends Component {
    componentDidMount() {
        this.props.getNotifications();
    }
    render() {
        // console.log(this.props);
        if(this.props.notifications.hasOwnProperty('notifications')) {
            return (
                <div>
                    <Title children="Notifications" />
                    <NotificationsLayout notifications={this.props.notifications}></NotificationsLayout>
                </div>
            )
        }else {
            return (
                <p>Whats up</p>
            )
            // console.log('Na');
        }
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: () => dispatch(getNotifications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
