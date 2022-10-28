import React, { useEffect, useState } from "react";
import "./forest.scss";

// takes 5 ticks to gather one wood, one skeleton give 50 ticks.
// each tick will be .5 seconds.

const Forest = () => {
    const [gatherTime, setGatherTime] = useState(0);

    return (
        <div className="tab-container forest">
            <p>
                The forest, neverending. You can assign <i>Skeletons</i> here to gather wood.
                <br/>
                One <i>Skeleton</i> can gather 10 pieces of wood before falling apart.
                <br/>
                These basic <i>Skeletons</i> can only take a single order, so <i>Skeletons</i> assign here can't be retrieved.
            </p>

            <p>You have {localStorage.getItem('wood')} pieces of wood.</p>

            <p>You have enough <i>Skeletons</i> here to work for {gatherTime} ticks.</p>
            <button>Add One <i>Skeleton</i></button>
            <button>Add half ({Math.floor(localStorage.getItem('skeletons') / 2)}) of your <i>Skeletons</i></button>
            <button>Add all ({localStorage.getItem('skeletons')}) of your <i>Skeletons</i></button>
        </div>
    )
}


export default Forest;