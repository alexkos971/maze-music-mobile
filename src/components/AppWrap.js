import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import { useHttp } from '../hooks/http.hook'

import styles from './styles';
import { Navbar, Selections, Player, FullPlayer, Home, Search, Library } from '../components/Main/pages';

const AppWrap = ({ dir, fullPlayer }) => {

  const { loading } = useHttp();

  const pages = {
    Home: <Home />,
    Search: <Search />,
    Library: <Library />
  }; 


    // For fonts
    async function loadApplication() {
      await Font.loadAsync({
        'dmsans-bold': require('../../assets/fonts/DM_Sans/DMSans-Bold.ttf')
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

  return (
    <View style={styles.container} >
      <Navbar />

      <ScrollView style={styles.main} >
          {
            pages[dir] 
          }
      </ScrollView>
      

        {fullPlayer ? 
          (<FullPlayer/>)
          : (
          <Player/>
          )
        }

        <Selections/>
      </View>
  )
}

const mapStateToProps = (state) => {
  return {
    fullPlayer: state.interface.fullPlayer,
    dir: state.directory.dir
  }
}

export default connect(mapStateToProps)(AppWrap)