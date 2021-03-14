import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    FullPlayer: {
        width: '100%',
        height: '95%',
        zIndex: 10,
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 0,
        // backgroundColor: '#151515',
        backgroundColor: '#000',
        position: 'relative',
        alignItems: 'center',
        borderTopEndRadius: 18,
        borderTopStartRadius: 18,
        // bottom: 0
    },
    FullPlayer_header: {
        height: '8%',
        width: '100%',
        // borderColor: '#fff',
        // borderWidth: .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },

    FullPlayer_header_line: {
        width: 50,
        height: 4,
        borderRadius: 2,
        top: 0,
        backgroundColor: '#8E8E8E'
    },
    arrow: {
        color: '#fff',
        position: 'relative',
        fontSize: 30,
        fontWeight: '100',
        transform: [
            {rotateZ: '-90deg'},
        ]
    },
    settings: {
        color: '#fff',
        fontSize: 20
    },

    cover_wrap: {
        width: '80%',
        marginTop: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    cover_img: {
        width: 350,
        height: 350,
        position: 'absolute',
        resizeMode: 'cover'
    },

    song_desc: {
        width: '80%',
        height: '7%',
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // borderColor: '#fff',
        // borderWidth: .5,
    },

    song_desc_name: {
        color: "#fff",
        fontSize: 27
    },
    song_desc_artist: {
        color: '#8E8E8E',
        fontSize: 20
    },
    song_more: {
        color: '#C4C4C4',
        position: 'absolute',
        right: '0%',
        top: '40%',
        fontSize: 20
    }
})

export default styles;