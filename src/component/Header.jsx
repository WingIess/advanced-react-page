import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
