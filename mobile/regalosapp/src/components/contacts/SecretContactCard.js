import React, { Component, Fragment } from 'react';
import { View, Image } from 'react-native';
import { withTheme, Card, Paragraph, Title, IconButton, Button } from 'react-native-paper';
import styles from '../../stylesheets/base.stylesheet';

class SecretContactCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visibleFriend: false
        };
    }

    showFriend = () => {
        this.setState({ visibleFriend: true });

        setTimeout(() => {
            this.setState({ visibleFriend: false });
        }, 5000);
    };    

    render() {
    
    let props = this.props;

    let avatar = (!props.user.avatar || props.user.avatar.length == 0) ? require('../../assets/avatar.png') : { uri: props.user.avatar }
    
    let avatarFriend = (!props.user.friend.avatar || props.user.friend.avatar.length == 0) ? require("../../assets/avatar.png") : {uri: props.user.friend.avatar};

    let avatarFriendHidden = this.state.visibleFriend ? avatarFriend : require("../../assets/avatard.png");    

    return (
        <Card style={styles.card}>
            <View style={[styles.row]}>
                <View>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Image style={styles.avatar} source={avatar}></Image>
                        <Paragraph>{props.user.name}</Paragraph>
                    </Card.Content>                  
                </View>
                <View style={{marginLeft: 15, marginRight: 15}}>
                        <Image style={styles.gift} source={require('../../assets/regalo.png')}></Image>
                        <Title>Dar a</Title>
                </View>
                <View>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Image style={styles.avatar} source={avatarFriendHidden}></Image>
                        {
                        this.state.visibleFriend ?
                        (<Fragment>
                            <Paragraph>{props.user.friend.name}</Paragraph>
                            <Paragraph style={[this.props.theme.fonts.light, { fontSize: 12 }]}>Mostrar por 5 seg.</Paragraph>
                        </Fragment>)
                        :
                        (<IconButton icon="visibility-off" onPress={this.showFriend} />)
                        }
                    </Card.Content>
                </View>                
            </View>

            <Card.Actions style={{backgroundColor: "#eee", alignItems: "center", justifyContent: "center"}}>
            <Button onPress={this.showFriend}>Ver amigo secreto</Button>
            </Card.Actions>            
        </Card>
    )
    }
}

export default withTheme(SecretContactCard)
