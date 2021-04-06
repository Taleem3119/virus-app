import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>COVID19 App</h3>
            <ul className="nav-links">
            <Link style={navStyle} to='/PastSearches'>
                <li>PastSearches</li>
                </Link>
                <Link style={navStyle} to='/NIHData'>
                <li>NIHData</li>
                </Link >
                <Link style={navStyle} to="/WHOData">
                <li >WHOData</li>
                </Link>
                <Link style={navStyle} to="/CDCData">
                <li >CDCData</li>
                </Link>
            </ul>
        </nav>
    );
    }

export default Nav;