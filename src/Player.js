import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Sound from 'react-native-sound';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Img from '../assets/icon.png';

const Player = ({ nowPlay, play, setPlay, mainStyles, saved, setSaved }) => {

    const styles = StyleSheet.create({
        player: {
            width: '93%',
            height: 60,
            position: 'absolute',
            bottom: mainStyles.SelectionsHeight + 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: mainStyles.PlayerBackground,
            paddingLeft: 30,
            // borderWidth: 1,
            // borderColor: '#000'
            borderRadius: 10
            // paddingRight: 20
        },
        player_cover_wrap: {
            width: 33,
            height: 33,
            position: 'relative',
            right: 15,
            overflow: 'hidden'
            // borderColor: '#fff',
            // borderWidth: 0.8
        },
        player_cover_img: {
            height: '100%',
            width: 'auto'
        },
        player_desk_name: {
            color: '#fff'
        },
        player_desk_artist: {
            color: '#adadad'
        },
        player_saved: {
            color: mainStyles.TextPlayerColor,
            fontSize: 25,
            position: 'absolute',
            right: 70
        },
        play_btn: {
            width: 60,
            height: 60,
            color: mainStyles.TextPinkColor,
            paddingLeft: 15,
            paddingTop: 15,
            fontSize: 30,
            // borderColor: '#fff',
            // borderWidth: 1
        },
        player_desk: {
            flexDirection: 'column',
            position: 'absolute',
            left: mainStyles.NavHeight - 15
        },
    })

    // let audio = new Sound(nowPlay.src, null, err => {
    //     if (err) return;
    //     alert(nowPlay.src);
    // })

    const onChangeSaved = () => {
        setSaved(!saved);
        nowPlay.saved = !saved;
    }

    return (
        // <GestureRecognizer onSwipeUp={() => console.log(page)}>
        <View style={styles.player}>
            <View style={styles.player_cover_wrap}>
                <Image source={Img} style={styles.player_cover_img}/>
            </View>

            <View style={styles.player_desk}>
                <Text style={styles.player_desk_name}>{nowPlay.name}</Text>
                <Text style={styles.player_desk_artist}>{nowPlay.artist}</Text>
            </View>

            <Icon 
                name={`heart${saved ? "-outline" : ""}`} 
                style={styles.player_saved}
                onPress={() => onChangeSaved()}/>

            <Icon name={`${play ? 'pause' : 'play'}`} style={styles.play_btn} onPress={() => setPlay(!play)}/>
        </View>
        // </GestureRecognizer>
    )
}

export default Player;