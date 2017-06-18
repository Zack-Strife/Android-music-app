import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, ListItem, List, Switch } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux'
import { NativeModules } from 'react-native';

export default class Musics extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentMusic : this.props.currentMusic,
    isPaused: true
  };
  static propTypes = {
    name: React.PropTypes.string,
  };

  onClick(music) {
    NativeModules.AudioPlayer.newMusic(music.url, true, (e) => {console.log('Music url: ' + e)});
    this.setState({
      currentMusic: music.title
    });
    this.setState({
        isPaused: false
      });
  }
  onPause() {
    NativeModules.AudioPlayer.play( (e) => {console.log('Music url: ' + e)} );
    if (this.state.isPaused) {
      this.setState({
        isPaused: false
      });
    } else {
      this.setState({
        isPaused: true
      });
    }
  }
  render() {
    const isPlayingMusic = this.state.currentMusic;
    return (
    <Container>
        <Header>
        </Header>
        <Content>
            <List dataArray={this.props.musics} 
            renderRow = {(music) => 
            <ListItem icon button onPress={() => this.onClick(music)}>
              <Left>
                <Icon name="md-musical-notes"/>
              </Left>
              <Body>
                <Text>{music.title}</Text>
              </Body>
            </ListItem>
            }></List>
        </Content>
         <Footer>
              <FooterTab>
                <Button full onPress= { () => this.onPause()}>
                {this.state.isPaused ? 
                  <Icon name="player" android="md-play"/> : <Icon name="player" android="md-pause"/>
                }
                {isPlayingMusic ?
                  <Text style={styles.baseText}> {isPlayingMusic} </Text> : <Text style={styles.baseText}> Play/Pause </Text>
                }
              </Button>
              </FooterTab>
          </Footer>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  baseText: {
    color: '#FFFFFF',
  },
});
