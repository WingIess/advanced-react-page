import React, { useState } from 'react';
import { modalOpen } from '../store/actions/layout';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

const Header = props => {
    const [click,setClick] = useState(false);

    const onclickHandler = () => {
        setClick(prevClick => !prevClick)
    }

    return (
        <header className="header">
            <nav className="navigation">
                <div className="open-modal" onClick={props.modal} />
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink onClick={onclickHandler} exact to="/">Home</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink onClick={onclickHandler} exact to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default connect(
    null,
    modalOpen
)(Header);
