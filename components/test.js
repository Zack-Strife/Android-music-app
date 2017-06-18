 <List dataArray={this.props.umsics} 
          renderRow = {(music) => 
          <ListItem icon >
            <Left>
             <Icon name="md-musical-notes" />
            </Left>
            <Body>
                <Text>{music.title}</Text>
            </Body>
          </ListItem>
        }></List>

         <List dataArray={this.props.data} 
          renderRow = {(music) => 
          <ListItem icon button>
            <Left>
              <Icon name="md-musical-notes" />
            </Left>
            <Body>
              <Text>{music.title}</Text>
            </Body>
          </ListItem>
          }></List>