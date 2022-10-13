import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../splash/splash";
import './menu.scss';

const tabs = {
    splash: Splash
}


const Menu = () => {
    const [tab, setTab] = useState('splash');


    return (
        <div id='menu'>
            <div className="tab-container">{tabs[tab]()}</div>
            <div className='tab-selector'>
                <button>welcome</button>
                <button>graves</button>
            </div>
        </div>
    )
}

export default Menu;