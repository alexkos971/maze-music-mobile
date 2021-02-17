import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import mainStyles from '../../mainStyles';

import store from '../../../redux/store';
const state = store.getState();


const styles = StyleSheet.create({
    home: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: "#ececec",
        // flexDirection: 'column',
        marginStart: 0,
        top: mainStyles.NavHeight,
        backgroundColor: "#ececec",
        overflow: 'scroll',
        // marginBottom: mainStyles.NavHeight
    },
    title: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: mainStyles.FontFamily,
        textAlign: 'left',
        marginBottom: 10,
        top: 10,
    },
    
    artists: {
        width: '90%',
        position: 'relative',
        left: 15,
        // borderWidth: 1,
        // borderColor: '#000',
        // marginBottom: 40,
        overflow: 'hidden'
    },

    artists_items: {
        width: `${state.artists.recomendArtists.length * 100}%`,
        height: 150,
        position: 'relative',
        marginTop: 23,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: "#000"
    },
    artist_item: {
        // marginEnd: 18,
        height: 150,
        // left: -12 + "%",
        width: '80%',
        position: 'relative',
        // borderColor: '#000',
        // borderWidth: 1,
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    artist_img: {
        flexDirection: 'row',
        backgroundColor: '#000',
        opacity: 1,
        height: 190,
        width: '100%',
        zIndex: 1,
        // display: "flex",
        // filteopacity: 0.5
    },
    artist_name: {
        top: '50%',
        color: '#fff',
        zIndex: 2,
        fontSize: 16,
        alignItems: 'center',
        position: 'absolute',
        fontFamily: mainStyles.FontFamily,
        justifyContent: 'center',
        textAlignVertical: 'center'
    },

    artist_desc_wrap: {
        position: 'absolute',
        top: '67%',
        zIndex: 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    artist_desc: {
        position: 'relative',
        zIndex: 2,
        fontSize: 12,
        color: "#D1D1D1"
    },

    songs: {
        width: '90%',
        height: '100%',
        position: 'relative',
        left: 15,
        // borderWidth: 1,
        // borderColor: '#000',
        // marginBottom: 40,
        // overflow: 'hidden'
    }, 
    songs_list: {
        marginTop: 23,
        // borderColor: '#000',
        // borderWidth: 1
    },
    songs_item_view: {
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderColor: '#000',
        // borderWidth: 0.3,
        alignItems: 'center',

    },

    song_item_text_wrap: {
        height: '100%',
        // width: 20,
        position: 'absolute',
        left: 60,
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'left',
        // borderWidth: 1,
        // borderColor: '#000',
        // top: 5
    },
    song_item_name: {
        position: "relative",
        textAlign: 'left',
        // borderWidth: 1,
        // borderColor: '#000'
    },
    song_item_artist: {
        color: mainStyles.TextColor,
    },
    song_item_img_wrap: {
        width: 45,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4

    },
    song_item_img: {
        width: '100%',
        height: 45,
        position: 'relative'
    },
    song_item_now: {
        paddingBottom: 10,
        paddingTop: 20,
        // borderBottomColor: mainStyles.MainBorder,
        // borderBottomWidth: 0.6,
        color: mainStyles.TextPinkColor,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    song_item_time: {
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        color: mainStyles.TextColor
    },
    song_item_heart: {
        fontSize: 20,
        color: mainStyles.TextColor
    }
})

export default styles;