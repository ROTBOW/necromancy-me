import { createRoot } from 'react-dom/client';
import Root from './components/root';
import './styles/index.scss';
import React from 'react';


const playerData = [
    'unlocks',
    'skeletons',
    'wood',
];

const readyPlayerData = () => {
    playerData.map(data => {
        if (localStorage.getItem(data) === null) {
            if (data === 'unlocks') {
                localStorage.setItem(data, '00')
                return;
            }
            localStorage.setItem(data, '0')
        }
    })
};

readyPlayerData();

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = createRoot(container)
    root.render(<Root/>)
})