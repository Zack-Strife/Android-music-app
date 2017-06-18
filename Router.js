import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './components/Home'
import MusicScreen from './components/Musics'


export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Music: {
    screen: MusicScreen
  }
})