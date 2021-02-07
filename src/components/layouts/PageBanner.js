import React from 'react'

function PageBanner({children, imgSrc}) {
    return (
        <div className="page-banner">
            <h1>{children}</h1>
            { imgSrc ? <div className="banner-img"><img src={imgSrc} alt="banner" /> </div> : ''}
        </div>
    )
}

export default PageBanner
