const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return action.value;
        default:
            return state;
    }
};

export default rootReducer;
