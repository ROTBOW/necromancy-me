import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./forest.scss";

// takes 5 ticks to gather one wood, one skeleton give 50 ticks.
// each tick will be .5 seconds.

const Forest = () => {
    const [gatherTicks, setGatherTicks] = useState(localStorage.getItem('woodgatherTicks'));
    const [gatherProg, setGatherProg] = useState(localStorage.getItem('woodgatherTicks'));

    const gatherWood = () => {
        let wood = Number(localStorage.getItem('wood'));
        localStorage.setItem('wood', wood + 1);
    };

    const addSkeleton = amount => e => {
        let skeletons = Number(localStorage.getItem('skeletons'));
        if (skeletons < amount) throw new Error('Not Enough Skeletons');

        localStorage.setItem('skeletons', skeletons-amount);
        let gt = Number(localStorage.getItem('woodGatherTicks'));
        localStorage.setItem('woodGatherTicks', gt + (50 * amount));
        setGatherTicks(gt + (50 * amount));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let gt = Number(localStorage.getItem('woodGatherTicks'));
            let gp = Number(localStorage.getItem('woodGatherProg'));

            if (gt > 0) {
                gt--;
                if (gp + 20 > 100) {
                    gatherWood();
                    gp = 0;
                } else {
                    gp += 20;
                }
                
            };

            localStorage.setItem('woodGatherTicks', gt);
            localStorage.setItem('woodGatherProg', gp);
            setGatherTicks(gt);
            setGatherProg(gp);
        }, 500);

        return () => clearInterval(interval);
    }, []);

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

            <p>You have enough <i>Skeletons</i> here to work for {gatherTicks} ticks.</p>
            <ProgressBar now={gatherProg} label="Gathering Wood..."/>
            <button onClick={addSkeleton(1)}>Add One <i>Skeleton</i></button>
            <button onClick={addSkeleton(Math.floor(Number(localStorage.getItem('skeletons')) / 2))}>Add half ({Math.floor(localStorage.getItem('skeletons') / 2)}) of your <i>Skeletons</i></button>
            <button onClick={addSkeleton(Number(localStorage.getItem('skeletons')))}>Add all ({localStorage.getItem('skeletons')}) of your <i>Skeletons</i></button>
        </div>
    )
}


export default Forest;