import { Route, Routes, Redirect, Navigate, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

import Menu from './menu/menu';
import Splash from './splash/splash';
import Graves from './graves/graves';
import Forest from './forest/forest';
import Settings from './settings/settings';

const SettingsButton = () => {
    const navi = useNavigate();
    const loca = useLocation();

    const handleClick = () => {
        (loca.pathname.slice(1) === 'settings') ? navi(-1) : navi('/settings');
    }

    return (
        <div style={{width: 0, height: 0, position: 'relative'}}>
            <FontAwesomeIcon icon={faGears} onClick={handleClick} className={`setting-gears ${(loca.pathname.slice(1) === 'settings') ? 'active' : ''}`}/>
        </div>
    )
}

const App = () => {
    const [updateMenu, setUpdateMenu] = useState(true);
    const pingMenu = () => { setUpdateMenu(val => !val); };

    return (
            <div id='main-container'>      
                <Routes>
                    <Route path='/welcome' element={<Splash pingMenu={pingMenu}/>}/>
                    <Route path='/graves' element={<Graves pingMenu={pingMenu}/>}/>
                    <Route path='/forest' element={<Forest/>}/>

                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='*' element={ <Navigate to='/welcome' replace/>}/>
                </Routes>
                <SettingsButton/>
                <Menu update={updateMenu}/>
            </div>
    )
}

export default App;