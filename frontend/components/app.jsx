import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Menu from './menu/menu';
import Splash from './splash/splash';
import Graves from './graves/graves';
import Forest from './forest/forest';

{/* <Route path='start' element={<Start/>}/>
<Route path='game' element={<Game/>}/>
<Route path='*' element={ <Navigate to='start' replace/>}/> */}



const App = () => {
    const [updateMenu, setUpdateMenu] = useState(true);
    const pingMenu = () => { setUpdateMenu(val => !val); };


    return (
            <div id='main-container'>      
                <Routes>
                    <Route path='/welcome' element={<Splash pingMenu={pingMenu}/>}/>
                    <Route path='/graves' element={<Graves pingMenu={pingMenu}/>}/>
                    <Route path='/forest' element={<Forest/>}/>


                    <Route path='*' element={ <Navigate to='/welcome' replace/>}/>
                </Routes>
                <Menu update={updateMenu}/>
            </div>
    )
}

export default App;