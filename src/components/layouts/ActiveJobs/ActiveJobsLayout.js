import React from 'react'
import PerActiveJob from './PerActiveJob';
export default function ActiveJobsLayout(props) {
    const { activeJobs } = props.activeJobs;
    return (
        <div className="activeJobs-list section">
            { activeJobs && activeJobs.map(activeJob => {
                return (
                    <PerActiveJob activeJobs={activeJob} key={activeJob.id} />
                )
            })
            }
        </div>
    )

    // ActiveJobss.map(ActiveJobs => {
    //     return (
    //         <PerNotification notification={notification}></PerNotification>
    //     )
    // })
}
