import React, { useEffect, useState } from "react";
import "./graves.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Graves = () => {
    const [skeletons, setSkeletons] = useState(Number(localStorage.getItem('skeletons')))

    const raiseSkeleton = e => {
        e.preventDefault();
        let newAmount = skeletons + 1;
        localStorage.setItem('skeletons', String(newAmount))
        setSkeletons(newAmount);
    }

    return (
        <div className="tab-container graves">
            <p>This is the graveyard, the only thing you can raise here are Skeletons. Dumb, but they have their uses.</p>
            <p>You have {skeletons} skeletons</p>

            <button onClick={raiseSkeleton}>Raise Skeleton</button>
            <ProgressBar now={skeletons}/>
        </div>
    )
}


export default Graves;