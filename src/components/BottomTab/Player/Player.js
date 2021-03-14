import React, { useRef, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { setFullPlayer, setNowSong } from '../../../redux/actions';

import { PanResponder } from "react-native-gesture-handler"

// import Sound from 'react-native-sound';
// import TrackPlayer from 'react-native-track-player';
import { trackPlayerServices } from '../../../../services'

import styles from './styles';

const Player = ({ dispatch, songs, song }) => {
    const pan = useRef(new Animated.ValueXY()).current

    const nowSong = {
        id: 1,
        url: "https://dll.z1.fm/music/c/5a/imagine_dragons_-_believer_(zf.fm).mp3",
        title: "Believer",
        artist: 'Imagine'
    }

    // useEffect(() => {
    //     (async () => {
    //         await TrackPlayer.setupPlayer().then(() => {
    //             console.log("Player ready");
    //         });

    //         TrackPlayer.registerPlaybackService(() => trackPlayerServices);

    //         await TrackPlayer.play();

    //         setTimeout(() => {
    //             TrackPlayer.stop()
    //         }, 2000)

    //         await TrackPlayer.add([nowSong]);
    //     })
    // }, [])


    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.setOffset({
              x: 0,
              y: pan.y._value
            });
          },
          onPanResponderMove: Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ]
          ),
          onPanResponderRelease: () => {
            pan.flattenOffset();
          }
        })
      ).current;
    

    // let state = await TrackPlayer.getState();

    // let trackId = await TrackPlayer.getCurrentTrack();
    // let trackObject = await TrackPlayer.getTrack(trackId);

    // let position = await TrackPlayer.getPosition();
    // let buffered = await TrackPlayer.getBufferedPosition();
    // let duration = await TrackPlayer.getDuration();

    // let tracks = await TrackPlayer.getQueue();

    // TrackPlayer.add([song]).then(function() {
        // The tracks were added
    // });


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

    // const playSound = async () => {
    //     const { sound } = await Audio.Sound.createAsync(
    //         require(song.src)
    //     )
    //     dispatch(setNowSong(sound));
    //     await sound.uploadAsync();
    // }

    return (
        <View style={{ transform: [{ translateY: pan.y }] }, styles.player}>
            
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

                <Icon name={`pause`} style={styles.player_song_play} onPress={() => true}/>
            </View>

            <View></View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists.recomendArtists,
        songs: state.songs.recomendSongs,
        song: state.songs.nowSong
    }
}

export default connect(mapStateToProps)(Player);