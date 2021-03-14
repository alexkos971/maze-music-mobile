import { CHANGE_DIR } from '../redux/types';

let initialState = {
    dir: 'Home'
}

export const dirReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DIR:
            return {...state, dir: action.payload}
        
        default: return state;
    }

}