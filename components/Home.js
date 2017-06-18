import React from 'react';
import Playlists from './Playlists'
import Musics from './Musics'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import {Actions} from 'react-native-router-flux'

export default class Home extends React.Component {
  
  static propTypes = {
    name: React.PropTypes.string,
  };
  render() {
    return (
		<Container>
	        <Header>
	        </Header>
	        <Content>
			<Playlists/>
	        </Content>
	    </Container>
    );
  }
}
