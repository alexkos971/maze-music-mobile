import { CHANGE_DIR, FULLPLAYER, SET_HEADER, CHANGE_MODE, RECOMEND_ARTISTS, RECOMEND_SONGS, SET_NOW_SONG } from './types';

export const changeDir = (dir) => {
    return {
        type: CHANGE_DIR,
        payload: dir
    }
}

export const setHeader = (state) => {
    return {
        type: SET_HEADER,
        payload: state
    }
}

export const changeMode = (item) => {
    return {
        type: CHANGE_MODE,
        payload: item
    }
}

export const setFullPlayer = (item) => {
    return {
        type: FULLPLAYER,
        payload: item
    }
}


export const setNowSong = (item) => {
    return {
        type: SET_NOW_SONG,
        payload: item
    }
}
export const recomendArtists = (item) => {
    return {
        type: RECOMEND_ARTISTS,
        payload: item
    }
}

export const recomendSongs = (item) => {
    return {
        type: RECOMEND_SONGS,
        payload: item
    }
}