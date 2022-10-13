import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import Menu from './menu/menu';
import React from 'react';

{/* <Route path='start' element={<Start/>}/>
<Route path='game' element={<Game/>}/>
<Route path='*' element={ <Navigate to='start' replace/>}/> */}

class App extends React.Component {

    render(){
        return (
                <div id='main-container'>      
                    <Routes>
                        <Route path='/' element={<Menu/>}/>
                        <Route path='*' element={ <Navigate to='/' replace/>}/>
                    </Routes>
                </div>
        )
    }
}

export default App;