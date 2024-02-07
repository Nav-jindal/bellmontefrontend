// Packages
import React from "react"

const FeatureCard = ({ icon, title, description, }) => {
    return <div className='featureCard'>
        <div className='icon'>
            {icon}
        </div>
        <div className='heading'>
            <h3>{title}</h3>
        </div>
        <p>{description}</p>
    </div>
}

export default FeatureCard