import React, { useEffect, useCallback, useState } from 'react';
import {  Text, View, ScrollView, Image, TouchableOpacity, Linking, RefreshControl } from 'react-native';

import { connect } from 'react-redux';
import { recomendArtists, recomendSongs, setNowSong } from '../../../redux/actions';

import Slick from 'react-native-slick';
import styles from './styles';

import { useHttp } from '../../../hooks/http.hook';

const Home = ({ dispatch, artists, songs }) => {

    const { request, loading } = useHttp()

    const getSongs = useCallback(async () => {
        try {
            const data = await request('https://cryptic-harbor-47632.herokuapp.com/api/songs/recomendation', 'GET');
            if (data) {
                dispatch(recomendSongs(data));
            }
        }
        catch (e) {}
    } ,[request]);

    useEffect(() => {
        getSongs();
    }, [getSongs]);

    const getArtists = useCallback(async () => {
        const data = await request('https://cryptic-harbor-47632.herokuapp.com/api/data/artists', 'GET');
        if (data) {
            dispatch(recomendArtists(data))
        }
    } , [request]);

    useEffect(() => {
        getArtists();
    }, [getArtists]);


    const setting = {
        slidesToShow: 3,
        // buttonText: '#404040'
    }
    
    if (loading) {
        return <Text>Loading</Text>
    }

    return (    
        <ScrollView>
            <View style={styles.artists}>
                <Text style={styles.title}>Most Popular Artists:</Text>
            
                <Slick style={styles.artists_items} {...setting}>
                    {artists.map((item) => {
                        return (
                            <View 
                                onPress={() => Linking.openURL('http://google.com')} 
                                style={styles.artist_item} 
                                key={item._id}>

                                <Image source={{ uri: item.avatar }} style={styles.artist_img}/>
                                <Text style={styles.artist_name}>{item.name}</Text>
                                
                                <View style={styles.artist_desc_wrap}>
                                    <Text style={styles.artist_desc}>{item.albums.length} Albums | </Text>
                                    <Text style={styles.artist_desc}>{(item.listenings/100000).toFixed(1)}M Followers</Text>
                                </View>
                            </View>
                        )
                    })}
                </Slick>                        
            </View>
            
            <View style={styles.songs}>
                <Text style={styles.title}>Most Popular songs:</Text>

                <View style={styles.songs_list}>
                    {songs && songs.map((item, index) => {

                        return (
                            <TouchableOpacity style={styles.songs_item_view} key={item._id} onPress={() => dispatch(setNowSong(item))} >

                                {/* <Text style={styles.song_item_count}>{index + 1}</Text> */}

                                <View style={styles.song_item_img_wrap}>
                                    <Image source={{ uri: item.cover }} style={styles.song_item_img}/>
                                </View>
                                
                                <View style={styles.song_item_text_wrap}>
                                    <Text style={styles.song_item_name}>{item.name}</Text>

                                    <Text style={{...styles.song_item_artist, color: '#adadad', fontSize: 14}}>{item.artist_name}</Text>
                                </View>

                                <Text style={styles.song_item_time}>03:45</Text>
                            </TouchableOpacity>
                        );         
                    })}
                </View>    
            </View>
            
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists.recomendArtists,
        songs: state.songs.recomendSongs
    }
}

export default connect(mapStateToProps)(Home);