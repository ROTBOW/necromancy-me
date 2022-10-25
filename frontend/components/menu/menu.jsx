import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUnlockAt } from "../../utils";

import './menu.scss';

let allTabs = ['welcome', 'graves', 'forest'];
// unlocks graves, forest

const Menu = () => {
    const loca = useLocation();
    const [tab, setTab] = useState(loca.pathname.slice(1));
    const navi = useNavigate();

    const changeTabTo = tab => e => {
        navi(`/${tab}`)
        return setTab(tab)
    };

    return (
        <div id='menu'>
            <div className='tab-selector'>
                {
                    allTabs.map((tabItem, idx) => {
                        if (idx === 0 || getUnlockAt(idx-1) === '1') {
                            return <button onClick={changeTabTo(tabItem)} className={tab === tabItem ? 'active' : ''} key={idx}>{tabItem}</button>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Menu;