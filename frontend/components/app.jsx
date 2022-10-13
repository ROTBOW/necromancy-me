import React from 'react';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';

import Splash from './splash/splash';

{/* <Route path='start' element={<Start/>}/>
<Route path='game' element={<Game/>}/>
<Route path='*' element={ <Navigate to='start' replace/>}/> */}

class App extends React.Component {

    render(){
        return (
                <div>      
                    <Routes>
                        <Route path='/' element={<Splash/>}/>


                        <Route path='*' element={ <Navigate to='/' replace/>}/>
                    </Routes>
                </div>
        )
    }
}

export default App;