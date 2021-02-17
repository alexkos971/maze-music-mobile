import { combineReducers } from 'redux';
import { dirReducer } from './dirReducer';
import { interfaceReducer } from './interfaceReducer';
import { artistsReducer } from './artistsReducer';
import { songsReducer } from './songsReducer';

export const rootReducer = combineReducers({
    directory: dirReducer,
    interface: interfaceReducer,
    artists: artistsReducer,
    songs: songsReducer
})