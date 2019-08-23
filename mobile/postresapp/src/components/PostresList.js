import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types';
import PostreItem from "./PostreItem";

export default class PostresList extends Component {

    static propTypes = {
        postres: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.list}>
                {/*this.props.postres.map((postre) => <Text key={0}> {postre.title} </Text>)*/}
                <FlatList
                    data={this.props.postres}
                    renderItem={({ item }) => (<PostreItem postre={item} onPress={this.props.onItemPress}/>) }
                />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 45
    }
});

