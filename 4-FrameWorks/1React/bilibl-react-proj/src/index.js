import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(__dirname, 'dirnameeee');
// console.log(__filename, 'filenameee');
console.log(process, 'processss');

root.render(
    <App />
);