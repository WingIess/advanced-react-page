import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Counter extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <div>Counter Page</div>
            </div>
        )
    }
}

export default Counter;