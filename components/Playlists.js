import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, List, Switch } from 'native-base';
import {Actions} from 'react-native-router-flux'


export default class Playlists extends React.Component {
	constructor(props) {
    super(props);
  }
  static propTypes = {
    name: React.PropTypes.string,
  };

  	state =  {
	  	playlists : [ 
	  		{
	  			"name" : "Daft Punk",
	  			"music" : [
					{
						"title": "One more time",
						"url": "https://drive.google.com/uc?id=0B4sYDpuDCa2wb3NuMmMyNmU5WEE&export=download"
					}
			  	]
	  		},
	  		{
	  			"name" : "Super Eurobeat",
	  			"music" : [
					{
						"title": "Gas Gas Gas",
						"url": "https://drive.google.com/uc?id=0B4sYDpuDCa2wNE9CUUNSQkxWNDg&export=download"
					},
					{
						"title": "Running in the 90s",
						"url": "https://drive.google.com/uc?id=0B4sYDpuDCa2wYnlncGxrQk4zbUE&export=download"
					}
			  	]
	  		},
	  		{
	  			"name" : "Random shit",
	  			"music" : [
					{
						"title": "Otoko no Uta Remixed",
						"url": "https://drive.google.com/uc?id=0B4sYDpuDCa2wWE9lQVpGUkpLZ0U&export=download"
					},
			  	]
	  		}
  		],
  		currentMusic : false
  	}
	
  render() {
    return (
      <Container>
	      <List dataArray={this.state.playlists} 	
	      	renderRow = {(playlist) => 
			<ListItem icon button onPress={() => Actions.musics({musics: playlist.music, currentMusic: this.state.currentMusic})}>
		 		<Left>
		            <Icon name="md-list" />
		        </Left>
		        <Body>
	          		<Text>{playlist.name}</Text>
		        </Body>
		    </ListItem>
	      }></List>
      </Container>
    );
  }
}
