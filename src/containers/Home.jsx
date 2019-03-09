import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
               <NavLink to="/counter">asd</NavLink>
               <div>Home Page</div>
            </div>
        )
    }
}

export default Home;