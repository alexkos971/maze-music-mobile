import { RECOMEND_ARTISTS } from '../redux/types';

const initialState = {
    recomendArtists: []
}

export const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECOMEND_ARTISTS:
            return {...state, recomendArtists: action.payload}

        default: return state;
    }
}