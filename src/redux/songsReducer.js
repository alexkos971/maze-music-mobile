import { SET_NOW_SONG, RECOMEND_SONGS } from './types';

const initialState = {
    recomendSongs: [],
    nowSong: {"lyrics":"first think think first","date":"2021-02-05T20:57:53.550Z","cover":"https://muz-tv.ru/storage/images/news/normal/pkEKibfbf2j4dKbwzFcXDMBUWjgYxjYHvu04CnAj.png","listenings":0,"_id":"601db157c3ad3b1dfcd66c97","name":"Believer","artist_name":"Alex Kos","artist_id":"601d8286665abe1cf86c40f6","src":"https://dll.z1.fm/music/c/5a/imagine_dragons_-_believer_(zf.fm).mp3","album_id":"601db157c3ad3b1dfcd66c98","__v":0}
}

export const songsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_NOW_SONG:
            return {...state, nowSong: actions.payload}

        case RECOMEND_SONGS:
            return {...state, recomendSongs: actions.payload}

        default: return state;
    }
}