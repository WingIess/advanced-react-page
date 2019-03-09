import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
