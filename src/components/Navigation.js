import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Sign Up / Sign In</Link></li>
                <li><Link to="/integration">Integration</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
