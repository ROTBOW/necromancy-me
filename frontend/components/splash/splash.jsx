import React, { useState, useEffect } from "react";
import { getUnlockAt, setUnlockAt } from "../../utils";


const Splash = (props) => {

    // useEffect(() => {
    //     if (getUnlockAt(0) === '0') {
    //         setUnlockAt(0, '2');
    //         props.pingMenu();
    //     }
    // }, []);
    
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
                <br/>
            </p>
            {/* <p className="splash-stats">
                You have {localStorage.getItem('skeletons')} <i>Skeletons</i>
            </p> */}
        </div>
    )
}

export default Splash;