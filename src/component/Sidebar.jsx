import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <NavLink
                exact
                    to={{
                        hash: '#random'
                    }}
                >
                    <li>random</li>
                </NavLink>
                <NavLink
                exact
                    to={{
                        hash: '#mégse'
                    }}
                >
                    <li>mégse</li>
                </NavLink>
            </ul>
        </aside>
    );
};

export default Sidebar;
