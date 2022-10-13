import { createRoot } from 'react-dom/client';
import Root from './components/root';
import './styles/index.scss';
import React from 'react';


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = createRoot(container)
    root.render(<Root/>)
})