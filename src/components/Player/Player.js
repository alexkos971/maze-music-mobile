import React, { useRef, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Img from '../../../assets/icons/icon.png'

import { connect } from 'react-redux';
import { setFullPlayer } from '../../redux/actions';

// import Sound from 'react-native-sound';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import styles from './styles';

const Player = ({ dispatch, song }) => {

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const dur = 250;

    // const saved = true;
    const full = 1;

    const onSwipeView = () => {
        Animated.timing(
            fadeAnim, 
            {
                toValue: Dimensions.get("window").height,
                duration: dur,
                useNativeDriver: false
            }
        ).start();

        setTimeout(() => {
            dispatch(setFullPlayer(true))
        }, dur);
    }

    useEffect(() => {
        if (full > 0) {}
            Animated.timing(
                fadeAnim, 
                {
                    toValue: 1,
                    duration: dur,
                    useNativeDriver: false
                }
            ).start()
        // }
    }, [full])

    return (
        <GestureRecognizer  onSwipeUp={onSwipeView} style={styles.player}>

            <View style={styles.player_cover_wrap}>
                <Image source={{ uri: song.cover }} style={styles.player_cover_img}/>
            </View>

            <View style={styles.player_desc_wrap}>
                <Text style={styles.player_desc_name}>{song.name}</Text>
                <Text style={styles.player_desc_artist}>{song.artist_name}</Text>
            </View>

            <View style={styles.player_song_cover}>
                <Icon   
                    name={`heart`} 
                    style={styles.player_song_saved}/>

                <Icon name={`pause`} style={styles.player_song_play}/>
            </View>

            <View ></View>
        </GestureRecognizer>
    )
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists.recomendArtists,
        song: state.songs.nowSong
    }
}

export default connect(mapStateToProps)(Player);