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
                <br/><br/>
                You should start at the graves.
            </p>
            <p className="splash-stats">
                You have {localStorage.getItem('skeletons')} <i>Skeletons</i>
            </p>
        </div>
    )
}

export default Splash;