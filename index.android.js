/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Home from './components/Home'
import Musics from './components/Musics'
import Playlists from './components/Playlists'
import {Scene, Router} from 'react-native-router-flux';
export default class ReactBase extends Component {
	

  render() {
    
    	return <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Playlists"/>

        <Scene key="musics" component={Musics} title="Musics"/>
      </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('ReactBase', () => ReactBase);
