import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../splash/splash";
import './menu.scss';

const tabs = {
    splash: Splash
};


const Menu = () => {
    const [tab, setTab] = useState('splash');
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
                <button onClick={changeTabTo('splash')} className={tab === 'splash' ? 'active' : ''}>welcome</button>
                <button onClick={changeTabTo('graves')} className={tab === 'graves' ? 'active' : ''}>graves</button>
            </div>
        </div>
    )
}

export default Menu;