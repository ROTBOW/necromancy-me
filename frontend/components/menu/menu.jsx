import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../splash/splash";
import Graves from "../graves/graves";
import './menu.scss';

const tabs = {
    welcome: Splash,
    graves: Graves
};
let allTabs = Object.keys(tabs);

const Menu = () => {
    const [tab, setTab] = useState('welcome');
    const changeTabTo = tab => e => {
        if (tab in tabs) {
            return setTab(tab)
        }
        console.error(`TabError: Tab ( ${tab} ) is not a tab!`)
    };

    return (
        <div id='menu'>
            <div className="tab-container">{tabs[tab]()}</div>
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