// import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Navbar from './src/Navbar';
import Selections from './src/Selections';
import Player from './src/Player'

import Home  from './src/Main/Home';
import Search from './src/Main/Search';
import Library from './src/Main/Library';

import camera from './assets/img/camera.jpg'
import glasses from './assets/img/glasses.jpg';
import guitar from './assets/img/guitar.jpg';
import lamp from './assets/img/lamp.jpg';

export default function App() {

  const [night, setNight] = useState(false);

  // Styles
  const mainStyles = {
    NavHeight: 90,
    SelectionsHeight: 40,
    MainBackgroundColor: night ? '#292929' : '#FFF',
    NavbarBackgroundColor: night ? '#151515' : '#dfe6ed',
    PlayerBackground: night ? "#151515" : "#dfe6ed",
    IconsColor: "#8E8E8E",
    FontFamily: 'dmsans-bold',
    TextColor: night ? '#8E8E8E' : '#000',
    TextPlayerColor: '#8E8E8E',
    TitleColor: night ? '#fff' : '#454545',
    TextPinkColor: '#2BA6A2',
    // FontSizeReg: 'DMSans-Regular',
    // FontSizeBold: 'sans-serif',
    NavbarTextColor: night ? '#8E8E8E' : '#000',
    Mode: night ? '#fff': '#000'
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: mainStyles.MainBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      paddingBottom: 140 /* Player + Selections */
    },
    main: {
      width: '100%',
      height: '100%',
      position: 'relative',
      // paddingTop: 10,
      paddingLeft: 5,
      top: mainStyles.NavHeight,
    },
    page: {
      width: '100%',
      height: '100%',
      paddingBottom: 140
    },
  })

  // States
  const [songs, setSongs] = useState([
    {
      "id": 1,
      "name": "Believer",
      "artist": "Imagine Dragons",
      "albums": "Evolve",
      "src": "https://mp3yoda.com/play/YWE1OWE1YjY3MTI4OWI2MGYyNGNmOTRjODgyYWIzZjEubXAz/",
      "cover": "https://mp3yoda.com/style/download_song/84bb4ff9bfc07c6611685fcc513eb6b4_large.jpg",
      "saved": false
    },
    {
      "id": 2,
      "name": "Call out my name",
      "artist": "The Weeknd",
      "albums": "My Dear Melancholy",
      "src": "https://cdn3.muzgoo.net/uploads/files/2018-08/1533758537_the-weeknd-call-out-my-name.mp3",
      "cover": "https://pesnigoo.ru/uploads/posts/2018-08/1533809536_200x200.jpg",
      "saved": true
    },
    {
      "id": 3,
      "name": "92",
      "artist": "Валентин Стрыкало",
      "albums": "Развлечение",
      "src": "https://cdn.mp3xa.cc/NRtGCFfUL-uix0T0XKguzQ/1598238326/L29ubGluZS9tcDMvMjAyMC8wNS_QktCw0LvQtdC90YLQuNC9INCh0YLRgNGL0LrQsNC70L4gLSA5Mi5tcDM",
      "cover": "https://static.mp3xa.cc/album_images/400x400/valentin-strykalo-smiris-i-rasslabsja.jpg",
      "saved": false
    },
    {
      "id": 4,
      "name": "Ускользает",
      "artist": "Валентин Стрыкало",
      "albums": "Развлечение",
      "src": "https://cdn.mp3xa.cc/AMdYWmzwN0ggfVxHnj5AMw/1598238607/L29ubGluZS9tcDMvMjAyMC8wNS_QktCw0LvQtdC90YLQuNC9INCh0YLRgNGL0LrQsNC70L4gLSDQo9GB0LrQvtC70YzQt9Cw0LXRgi5tcDM",
      "cover": "https://static.mp3xa.cc/album_images/400x400/valentin-strykalo-razvlechenie.jpg",
      "saved": false
    },
    {
      "id": 5,
      "name": "Тени",
      "artist": "Валентин Стрыкало",
      "albums": "Развлечение",
      "src": "https://mzmdl.com/get/cuts/30/91/30914f13924b1cefc7fcce689343d99b/47844605/Valentin_Strykalo_-_Teni_b128f0d344.mp3",
      "cover": "https://static.mp3xa.cc/album_images/400x400/valentin-strykalo-razvlechenie.jpg",
      "saved": false
    },
    {
      "id": 6,
      "name": "Батареи",
      "artist": "Нервы",
      "albums": "Развлечение",
      "src": "https://mp3yoda.com/play/NGZhYTI4Mjg5MDEyODA5ZmZiOTgxYjBlMDZlMDgzZjAubXAz/",
      "cover": "https://pravda-news.ru/upload/resize_cache/iblock/0e3/580_390_15f6c2ca7f349d878e77366566b5d05c8/0e3e388ffba505fc78e32f7d37f1c33d.jpg",
      "saved": false
    },
    {
      "id": 7,
      "name": "Будем друзьями",
      "artist": "Нервы",
      "albums": "Развлечение",
      "src": "https://cdn.mp3xa.cc/zzHaWrH2DptF25puxoRSAg/1598240857/L29ubGluZS9tcDMvMjAxMi8wNS_QndC10YDQstGLIC0g0JTQsNCy0LDQuSDQkdGD0LTQtdC8INCU0YDRg9C30YzRj9C80LgubXAz",
      "cover": "https://pravda-news.ru/upload/resize_cache/iblock/0e3/580_390_15f6c2ca7f349d878e77366566b5d05c8/0e3e388ffba505fc78e32f7d37f1c33d.jpg",
      "saved": false
    },
    {
      "id": 8,
      "name": "Stayin' Alive",
      "artist": "Bee Gees",
      "albums": "Развлечение",
      "src": "https://cdn9.sefon.pro/files/prev/1/The%20Bee%20Gees%20-%20Stayin%27%20Alive%20%28192kbps%29.mp3",
      "cover": "https://sefon.pro/img/artist_photos/the-bee-gees.jpg",
      "saved": true
    },
    {
      "id": 9,
      "name": "Maps",
      "artist": "Maroon 5",
      "albums": "V",
      "src": "https://mp3yoda.com/play/NzgyNjIxNTAxNDJiMzU3YjliMDBmOWY5ZTdkMWY1NTUubXAz/",
      "cover": "https://cdn.ontourmedia.io/maroon5sin//non_secure/images/20140616/news/maps_avail_now1x1/large.jpg",
      "saved": true
    },
    {
      "id": 10,
      "name": "Maps",
      "artist": "Maroon 5",
      "albums": "V",
      "src": "https://mp3yoda.com/play/NzgyNjIxNTAxNDJiMzU3YjliMDBmOWY5ZTdkMWY1NTUubXAz/",
      "cover": "https://cdn.ontourmedia.io/maroon5sin//non_secure/images/20140616/news/maps_avail_now1x1/large.jpg",
      "saved": true
    },
    {
      "id": 11,
      "name": "Maps",
      "artist": "Maroon 5",
      "albums": "V",
      "src": "https://mp3yoda.com/play/NzgyNjIxNTAxNDJiMzU3YjliMDBmOWY5ZTdkMWY1NTUubXAz/",
      "cover": "https://cdn.ontourmedia.io/maroon5sin//non_secure/images/20140616/news/maps_avail_now1x1/large.jpg",
      "saved": true
    },
    {
      "id": 12,
      "name": "Maps",
      "artist": "Maroon 5",
      "albums": "V",
      "src": "https://mp3yoda.com/play/NzgyNjIxNTAxNDJiMzU3YjliMDBmOWY5ZTdkMWY1NTUubXAz/",
      "cover": "https://cdn.ontourmedia.io/maroon5sin//non_secure/images/20140616/news/maps_avail_now1x1/large.jpg",
      "saved": true
    }
  ]);
  const [artists, setArtists] = useState([ 
    {
      "id": 1,
      "name": "The Weeknd",
      "listeners": "1630809",
      "albums": 23,
      "img": {guitar}
    },
    {
      "id": 2,
      "name": "Billie Eilish",
      "listeners": "878090",
      "albums": 6,
      "img": {lamp}  
    },
    {
      "id": 3,
      "name": "Taylor Swift",
      "listeners": "2508748",
      "albums": 16,
      "img": {camera}
    },
    {
      "id": 4,
      "name": "Lady Gaga",
      "listeners": "4097049",
      "albums": 31,
      "img": {glasses}
    }
  ])
  const [page, setPage] = useState(1);
  const [nowPlay, setNowPlay] = useState(songs[0]);
  const [play, setPlay] = useState(false);
  const [saved, setSaved] = useState(nowPlay.saved);

  useEffect(() => {
    setSaved(nowPlay.saved);
  }, [nowPlay])


  async function loadApplication() {
    await Font.loadAsync({
      'lilita-regular': require('./assets/fonts/Lilita_One/LilitaOne-Regular.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'dmsans-bold': require('./assets/fonts/DM_Sans/DMSans-Bold.ttf')
    });
  }
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadApplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  const pages = [
    <Home 
      songs={songs} 
      artists={artists}
      nowPlay={nowPlay} 
      setNowPlay={setNowPlay} 
      mainStyles={mainStyles}
      setSaved={setSaved}/>,
    <Search songs={songs}/>, 
    <Library/>
  ];
  
  const title = () => {
    if (page === 1) {
      return 'Home';
    }
    else if (page === 2) {
      return 'Search';
    }
    else if (page === 3) {
      return 'Library';
    }
  }

  // useEffect(() => {
  //   axios.get('http://localhost:3001/songs')
  //     .then(({data}) => setSongs(data));
  // }, [page]);

  return (
    <View style={styles.container}>

      <Navbar 
        title={title()} 
        mainStyles={mainStyles}
        setNight={setNight}
        night={night}/>

      <ScrollView style={styles.main}>
        {songs && pages[page - 1]}
      </ScrollView>

      <Player 
        nowPlay={nowPlay} 
        play={play} 
        setPlay={setPlay}
        mainStyles={mainStyles}      
        saved={saved}
        setSaved={setSaved}/>

      <Selections setPage={setPage} page={page} mainStyles={mainStyles} night={night}/>
    </View>
  )
}

