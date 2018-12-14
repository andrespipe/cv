import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark">
        <nav className="container navbar navbar-expand-md">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/roster">Roster</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/schedule">Schedule</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/cv">CV</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;