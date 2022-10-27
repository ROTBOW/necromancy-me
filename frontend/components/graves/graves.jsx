import React, { useEffect, useState } from "react";
import "./graves.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getUnlockAt, setUnlockAt, sleep } from "../../utils";


// let buildSkel = 0;

const Graves = (props) => {
    const [skeletons, setSkeletons] = useState(Number(localStorage.getItem('skeletons')));
    const [buildSkel, setBuildSkel] = useState(0);
    const [building, setBuilding] = useState(false);

    const raiseSkeleton = e => {
        e.preventDefault();
        setBuilding(true);

        (async () => {
            let sc  = 0
            while (sc <= 100) {
                await sleep(50)
                setBuildSkel(skel => skel + 1)
                sc++;
            }

            let newAmount = skeletons + 1;
            localStorage.setItem('skeletons', String(newAmount))
            setSkeletons(newAmount);
            if (getUnlockAt(1) != '1' && newAmount > 9) {
                // alert('you\'ve unlocked the forest')
                setUnlockAt(1, '2')
                props.pingMenu();
            }
            setBuildSkel(0)
            setBuilding(false);
        })();
    }

    return (
        <div className="tab-container graves">
            <p>This is the graveyard, the only thing you can raise here are <i>Skeletons</i>. Dumb, but they have their uses.</p>
            <p>You have {skeletons} <i>Skeletons</i></p>

            <button onClick={raiseSkeleton} disabled={building}>Raise <i>Skeleton</i></button>
            <ProgressBar now={buildSkel} label={`${buildSkel}%`}/>
        </div>
    )
}


export default Graves;