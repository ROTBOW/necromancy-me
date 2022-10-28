import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUnlockAt, setUnlockAt } from "../../utils";

import './menu.scss';

let allTabs = ['welcome', 'graves', 'forest'];
// unlocks graves, forest

const Menu = (props) => {
    const loca = useLocation();
    const [tab, setTab] = useState(loca.pathname.slice(1));
    const navi = useNavigate();

    useEffect((e)=>(e), [props.update])

    useEffect(() => {
        setTab(loca.pathname.slice(1))
    }, [loca.pathname.slice(1)])

    const changeTabTo = tab => e => {
        navi(`/${tab}`)
    };

    const unlockTab = (idx, tab) => e => {
        setUnlockAt(idx, '1');
        changeTabTo(tab)();
    }

    return (
        <div id='menu'>
            <div className='tab-selector'>
                {
                    allTabs.map((tabItem, idx) => {
                        if (idx === 0 || getUnlockAt(idx-1) === '1') {
                            return <button onClick={changeTabTo(tabItem)} className={tab === tabItem ? 'active' : ''} key={idx}>{tabItem}</button>
                        } else if (getUnlockAt(idx - 1) === '2') {
                            return <button onClick={unlockTab(idx - 1, tabItem)} className={tab === tabItem ? 'active' : ''} key={idx}>Unlock {tabItem}</button>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Menu;