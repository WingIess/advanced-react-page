const initialState = {
    value: 0,
    modal: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: action.value
            };
        case 'MODAL':
            return {
                ...state,
                modal: !state.modal
            };
        default:
            return state;
    }
};

export default rootReducer;
