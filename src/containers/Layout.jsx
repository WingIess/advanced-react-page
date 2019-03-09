import React, { Component, Fragment } from 'react';

import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Modal from '../component/Modal';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Sidebar />
                <Modal />
            </Fragment>
        );
    }
}

export default Layout;
