import React from 'react';

import { connect } from 'react-redux';
import { modalState, modalOpen } from '../store/actions/layout';

const Modal = props => {
    return ( props.modalState ?
        <div className="modal-wrapper">
            <div onClick={props.modal} className="backdrop"  />
            <div className="modal">
                <div onClick={props.modal} className="close fas fa-times"></div>
            </div>
        </div> :null
    );
};

export default connect(modalState,modalOpen)(Modal);
