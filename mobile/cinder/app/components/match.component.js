import React, { Component } from 'react'
import {
    Button,
    Icon,
    Spinner,
    Card,
    CardItem,
    DeckSwiper
} from 'native-base';
import { StyleSheet, View, Text, Image } from 'react-native';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import { createAutoSubscriber, autoSubscriber } from 'firebase-nest';

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _autoSubscriberFetching: true,
            _autoSubscriberError: null
        };
    }
    static getSubs(props, state) {
        const { auth, matches } = props.stores;
        return auth.authUser ? matches.subs() : [];
    }
    subscribeSubs(subs, props, state) {
        const { matches } = props.stores;
        return matches.subscribeSubsWithPromise(subs);
    }
    markViewed(match) {
        this.props.stores.matches.markViewed(match[0]);
    }
    renderCard(post, store) {
        const postObj = post ? post[1] : null;
        if (postObj) {
            let pic = { uri: postObj.url }
            let text = postObj.text;

            return (
                <Card>
                    <CardItem cardBody>
                        {pic.uri != undefined && pic.uri != "" ? <Image style={styles.thumbnail} source={pic} /> : null}
                    </CardItem>
                    <CardItem>
                        <Text style={styles.text}>
                            {text}
                        </Text>
                    </CardItem>
                </Card>
            )
        }
        return null;
    }
    renderNoMoreCards() {
        return (
            <Card>
                <CardItem cardBody>
                    <Text style={styles.text}> Fuera de coincidencias </Text>
                </CardItem>
            </Card>
        )
    }
    render() {
        const {matches, auth} = this.props.stores;
        const user = auth.authUser

        const { _autoSubscriberFetching: fetching, _autoSubscriberError: fetchError} = this.state;

        if(fetchError){
            return <Text style={{backgroundColor:"red"}}>{fetchError}</Text>
        }

        const postList = matches.getData('matches');
        const list = postList ? postList.entries() : null;

        return (
            <View>
                { fetching ? <Spinner/> : 
                  <DeckSwiper 
                  dataSource={list}
                  renderItem={(card)=>this.renderCard(card, matches)}
                  renderEmpty={this.renderNoMoreCards.bind(this)}
                  looping={false}
                  onSwipeRight={(item)=>this.markViewed(item)}
                  onSwipeLeft={(item)=>this.markViewed(item)}
                  />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    thumbnail: {
        width: 300,
        height: 300,
        flex: 1
    }
})

export default autoSubscriber(observer(Match))