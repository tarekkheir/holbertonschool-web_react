import logo from '../assets/holberton_logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
    return (
        <div className="App-header">
            <img src={logo} alt="holberton logo" height="200"/>
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;
