import { View, Text, ScrollView } from 'react-native';
import React  from 'react';
import { connect } from 'react-redux';

// import { useHttp } from '../hooks/http.hook'

import styles from './styles';
import { Navbar, Home, Search, Library } from '../components/Main/pages';
import BottomTab from "./BottomTab/BottomTab";

const AppWrap = ({ dir }) => {

  const pages = {
    Home: <Home />,
    Search: <Search />,
    Library: <Library />
  }; 


  return (
    <View style={styles.container} >
      <Navbar />

      <ScrollView style={styles.main} >
          {
            pages[dir] 
          }
      </ScrollView>
      

        
        <BottomTab />

        {/*<Selections/>*/}
      </View>
  )
}

const mapStateToProps = (state) => {
  return {
    dir: state.directory.dir
  }
}

export default connect(mapStateToProps)(AppWrap)