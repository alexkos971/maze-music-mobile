import React, { useState} from 'react';
import { NativeRouter } from 'react-router-native'
import { Provider} from 'react-redux';

import store from './src/redux/store'

import AppWrap from './src/components/AppWrap';


const App = () => {
  return (
    <Provider store={store}>  
      <NativeRouter>
        <AppWrap/>
      </NativeRouter>
    </Provider>
  )
}

export default App;