import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Animated, Text, Image, View, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import GestureRecognizer from 'react-native-swipe-gestures';

import { setFullPlayer } from '../../../redux/actions';

import styles from './styles';


const FullPlayer = ({ dispatch, song }) => {

    const fadeAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current
    const dur = 250;

    const onSwipeView = () => {
        Animated.timing(
            fadeAnim, 
            {
                toValue: Dimensions.get("window").height,
                duration: dur,
                useNativeDriver: false
            }
        ).start()
        
        setTimeout(() => {
            dispatch(setFullPlayer(false))
        }, dur);
    }

    useEffect(() => {
        // if (fadeAnim > 0) {
            Animated.timing(
                fadeAnim, 
                {
                    toValue: 0,
                    duration: dur,
                    useNativeDriver: false
                }
            ).start()
        // }
    }, [fadeAnim])


 return (
     
     <Animated.View style={{
         ...styles.FullPlayer, top: fadeAnim,
        }}>
            <GestureRecognizer style={styles.FullPlayer_header} onSwipeDown={onSwipeView}>
                {/* <Icon name='chevron-left' style={styles.arrow} onPress={() => onSwipeView()}/> */}

                <View style={styles.FullPlayer_header_line} onPress={onSwipeView}></View>

                {/* <Icon name='dots-two-vertical' style={styles.settings}/> */}
            </GestureRecognizer>

            <View style={styles.cover_wrap}>
                <View style={{ width: '100%', paddingBottom: '100%', overflow: 'hidden', position: 'relative'}}>
                    <Image source={{ uri: song.cover }} style={styles.cover_img}/>
                </View>
            </View>

            <View style={styles.song_desc}>
                <Text style={styles.song_desc_name}>{song.name}</Text>
                <Text style={styles.song_desc_artist}>{song.artist_name}</Text>

                <Icon 
                    name={'dots-three-vertical'}
                    // name={`heart${!saved ? '-outlined' : ''}`} 
                    style={styles.song_more}
                />

            </View>
    </Animated.View>
 )
}

const mapStateToProps = (state) => {
    return {
        song: state.songs.nowSong
    }
}

export default connect(mapStateToProps)(FullPlayer);