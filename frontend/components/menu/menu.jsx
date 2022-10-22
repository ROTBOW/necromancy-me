import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import './menu.scss';

let allTabs = ['welcome', 'graves'];

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
                    allTabs.map((tabItem, idx) => (
                        <button onClick={changeTabTo(tabItem)} className={tab === tabItem ? 'active' : ''} key={idx}>{tabItem}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu;