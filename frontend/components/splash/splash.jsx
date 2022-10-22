import React, { useState, useEffect } from "react";


const Splash = () => {

    return (
        <div className="tab-container splash">
            <p>
                You are the Necromancer.
                <br/>
                The millennia reading books in an ancient underground library has bored you.
                <br/>
                The world of the living shall fall.
                <br/>
                They will never forget your name again.
            </p>
            <p className="splash-stats">
                {(localStorage.getItem('skeletons') !== '0')}
            </p>
        </div>
    )
}

export default Splash;