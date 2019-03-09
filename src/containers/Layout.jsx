import React, { Component, Fragment } from 'react';

import Header from '../component/Header';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <aside>sidebar</aside>
                <div>modal</div>
            </Fragment>
        );
    }
}

export default Layout;
