import React from 'react'
import PerNotification from './perNotification';
export default function NotificationsLayout(props) {
    const { notifications } = props.notifications;
    return (
        <div className="notification-list section">
            { notifications && notifications.map(notification => {
                return (
                    <PerNotification notification={notification} key={notification.id} />
                )
            })
            }
        </div>
    )

    // notifications.map(notification => {
    //     return (
    //         <PerNotification notification={notification}></PerNotification>
    //     )
    // })
}
