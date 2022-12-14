import { createRoot } from 'react-dom/client';
import Root from './components/root';
import './styles/index.scss';
import React from 'react';

// Unlocks are as follows: ID: Idx
// Skeletons: 0,  forest: 1

const startData = {
    'unlocks': '20',
    'skeletons': '0',
    'skeletonRate': '1',
    'wood': '0',
    'woodGatherTicks': '0',
    'woodGatherProg': '0',
    'woodRate': '1',
}

const playerData = Object.keys(startData);

const readyPlayerData = () => {
    playerData.forEach(data => {
        if (localStorage.getItem(data) === null) {
            localStorage.setItem(data, startData[data])
        }
    })
};

readyPlayerData();

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = createRoot(container)
    root.render(<Root/>)
})