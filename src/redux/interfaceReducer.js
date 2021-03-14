import { FULLPLAYER, SET_HEADER, CHANGE_MODE } from '../redux/types';

const initialState = {
    fullPlayer: false,
    night: false,
    header: false
}

export const interfaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FULLPLAYER:
            return {...state, fullPlayer: action.payload}
        
        case SET_HEADER:
            return {...state, header: action.payload}

        case CHANGE_MODE:
            return {...state, night: action.payload}

        default: return state;
    }

}