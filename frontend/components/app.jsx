import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import Menu from './menu/menu';
import Splash from './splash/splash';
import Graves from './graves/graves';

{/* <Route path='start' element={<Start/>}/>
<Route path='game' element={<Game/>}/>
<Route path='*' element={ <Navigate to='start' replace/>}/> */}

const playerData = [
    'skeletons'
];

// class App extends React.Component {
const App = () => {

    useEffect(() => {
        playerData.map(data => {
            if (localStorage.getItem(data) === null) {
                localStorage.setItem(data, '0')
            }
        })
    }, []);

    return (
            <div id='main-container'>      
                <Routes>
                    <Route path='/welcome' element={<Splash/>}/>
                    <Route path='/graves' element={<Graves/>}/>


                    <Route path='*' element={ <Navigate to='/welcome' replace/>}/>
                </Routes>
                <Menu/>
            </div>
    )
}

export default App;