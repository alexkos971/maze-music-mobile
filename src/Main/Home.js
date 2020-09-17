import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Slick from 'react-native-slick';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import lamp from '../../assets/img/lamp.jpg';

const Home = ({ songs, nowPlay, setNowPlay, mainStyles, setSaved, artists }) => {

    const styles = StyleSheet.create({
        home: {
            width: '100%',
            height: '100%',
            position: 'relative',
            flexDirection: 'column',
            marginStart: 0,
            overflow: 'scroll',
            marginBottom: mainStyles.NavHeight
        },

        artists: {
            width: '90%',
            position: 'relative',
            top: 10,
            left: 15,
            // marginBottom: 40,
            overflow: 'hidden'
        },

        artists_items: {
            width: `${artists.length * 100}%`,
            height: 150,
            position: 'relative',
            marginTop: 23,
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        artists_item: {
            marginEnd: 18,
            height: 150,
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
        artist_item_img: {
            flexDirection: 'row',
            height: '100%',
            width: 'auto'
            // filteopacity: 0.5
        },
        artists_item_name: {
            color: '#fff',
            zIndex: 1000,
            fontSize: 16,
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            justifyContent: 'center',
            textAlignVertical: 'center'
        },

        item_view: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#000',
            borderBottomWidth: 0.3,
            alignItems: 'center'
        },
        songs: {
            width: '90%',
            position: 'relative',
            top: 10,
            left: 15
        }, 
        songs_list: {
            flexDirection: 'column',
        },
        song_item: {
            paddingBottom: 10,
            paddingTop: 20,
            color: mainStyles.TextColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
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
            right: 35,
            color: mainStyles.TextColor
        },
        song_item_heart: {
            fontSize: 20,
            color: mainStyles.TextColor
        },
        title: {
            color: '#000',
            fontSize: 15,
            fontFamily: mainStyles.FontFamily,
            textAlign: 'left',
            marginBottom: 0
        }
    })

    const onChangeSaved = (item) => {
        setSaved(!item.saved);

        // item.saved = !item.saved;
        if (nowPlay == item) nowPlay.saved = !item.saved
        // nowPlay.saved = !item.saved;
    }

    return (    
        <ScrollView style={styles.home}>

            <View style={styles.artists}>
                <Text style={styles.title}>Most Popular Artists:</Text>

                <Slick 
                    style={styles.artists_items}
                    showsButtons={false}
                    showView={2}>

                    {artists.map(item => {
                        return (
                            <View key={item.id} style={styles.artists_item}>
                                <Image source={lamp} style={artists.artist_item_img}/>
                                <Text style={styles.artists_item_name}>{item.name}</Text>
                            </View>
                        )
                    })}
                </Slick>
            </View>
            
            <View style={styles.songs}>
                <Text style={styles.title}>Most Popular songs:</Text>

                <View style={styles.songs_list}>
                    {songs.map(item => {
                        return (
                            <View style={styles.item_view}  key={item.id}>
                                
                                <Text 
                                    style={nowPlay === item ? styles.song_item_now : styles.song_item} 
                                    onPress={() => setNowPlay(item)}>
                                        {item.id}.   {item.name} - {item.artist}
                                </Text>

                                <Text style={styles.song_item_time}>03:45</Text>
                                <Icon 
                                    name={`heart${item.saved ? "" : "-outline"}`} 
                                    style={styles.song_item_heart}
                                    onPress={() => onChangeSaved(item)}/>
                            </View>
                        );         
                    })}
                </View>    
            </View>
            
        </ScrollView>
    );
}

export default Home;