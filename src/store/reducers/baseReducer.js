const initialState = {
    value: 0,
    modul: false
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
                modul: action.modul
            };
        default:
            return state;
    }
};

export default rootReducer;
