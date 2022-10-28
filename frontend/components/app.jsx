import { Route, Routes, Redirect, Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

import Menu from './menu/menu';
import Splash from './splash/splash';
import Graves from './graves/graves';
import Forest from './forest/forest';
import Settings from './settings/settings';


const App = () => {
    const [updateMenu, setUpdateMenu] = useState(true);
    const pingMenu = () => { setUpdateMenu(val => !val); };
    const navi = useNavigate();


    return (
            <div id='main-container'>      
                <Routes>
                    <Route path='/welcome' element={<Splash pingMenu={pingMenu}/>}/>
                    <Route path='/graves' element={<Graves pingMenu={pingMenu}/>}/>
                    <Route path='/forest' element={<Forest/>}/>

                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='*' element={ <Navigate to='/welcome' replace/>}/>
                </Routes>
                <div style={{width: 0, height: 0, position: 'relative'}}><FontAwesomeIcon icon={faGears} onClick={()=>(navi('/settings'))} className="setting-gears"/></div>
                <Menu update={updateMenu}/>
            </div>
    )
}

export default App;