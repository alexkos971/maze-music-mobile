import { StyleSheet } from 'react-native';
import mainStyles from '../../mainStyles';

import store from '../../../redux/store';
const state = store.getState();


const styles = StyleSheet.create({
    player: {
        width: '93%',
        height: 60,
        position: 'absolute',
        bottom: mainStyles.SelectionsHeight + 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: mainStyles.PlayerBackground,
        paddingLeft: 30,
        
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
        borderRadius: 10
        // paddingRight: 20
    },
    player_cover_wrap: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 10,
        overflow: 'hidden',
        borderRadius: 4
        // borderColor: '#fff',
        // borderWidth: 8
    },
    player_cover_img: {
        height: '100%',
        width: 'auto'
    },
    player_desc_wrap: {
        flexDirection: 'column',
        position: 'absolute',
        left: 60
    },  
    player_desc_name: {
        color: "#000",
        // marginBottom: 4
        // fontSize: 15,
    },
    player_desc_artist: {
        color: '#adadad'
    },
    player_song_cover: {
        position: 'absolute',
        right: 15,
        flexDirection: 'row'
    },
    player_saved: {
        color: mainStyles.TextPlayerColor,
        fontSize: 25,
        position: 'absolute',
        right: 10
    },
    player_song_saved: {
        color: mainStyles.TextPinkColor,
        // paddingLeft: 15,
        // paddingTop: 15,
        fontSize: 25,
        // borderColor: '#fff',
        // borderWidth: 1
    },
    player_song_play: {
        fontSize: 25,
        marginLeft: 15
    }
})

export default styles;