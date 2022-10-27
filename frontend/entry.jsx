import { createRoot } from 'react-dom/client';
import Root from './components/root';
import './styles/index.scss';
import React from 'react';


const playerData = [
    'unlocks',
    'skeletons',
    'skeletonRate',
    'wood',
];

const startData = {
    'unlocks': '00',
    'skeletons': '0',
    'skeletonRate': '1',
    'wood': '0',
}

const readyPlayerData = () => {
    playerData.map(data => {
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