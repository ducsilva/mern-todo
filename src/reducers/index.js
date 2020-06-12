import { GET_TODOS } from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, loading: true };

        default:
            return state;
    }
};

export default reducer;