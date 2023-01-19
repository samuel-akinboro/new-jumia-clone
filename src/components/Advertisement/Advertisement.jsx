import React from 'react'
import './Advertisement.css'

function Advertisement({image1, image2}) {
    return (
        <div className="ad">
            <div className="ads__image">
                <img src={image1} alt=""/>
            </div>
            <div className="ads__image">
                <img src={image2} alt=""/>
            </div>
        </div>
    )
}

export default Advertisement
