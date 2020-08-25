import React from 'react'

export default function PerActiveJob(props) {
    const activeJob = props.activeJobs;
    return (
        <div className="activeJob">
            <div className="top">
                <p>{activeJob.title}</p>
                <p>{activeJob.Location}</p>
            </div>
            <div className="body">
                <p>{activeJob.desc}</p>
            </div>
            <div className="profile-flex">
                <div className="left">
                    <img src={activeJob.avi} alt={"Worker " + activeJob.id + " Image"}/>
                    <p>{activeJob.worker}</p>
                </div>
                <p>{activeJob.status}</p>
            </div>
            <div className="progress-cover">
                <div className="job-progress" style={{ }}>
            </div>
                <p>{activeJob.details}</p>
            </div>
        </div>
    )
    // return (
    //     <p>HI</p>
    // )
}
