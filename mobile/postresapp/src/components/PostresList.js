import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types';

export default class PostresList extends Component {

    static propTypes = {
        postres: PropTypes.array.isRequired
    }

    render() {
        return (
            <View style={styles.list}>
                {/*this.props.postres.map((postre) => <Text key={postre.key}> {postre.title} </Text>)*/}
                <FlatList
                    data={this.props.postres}
                    renderItem={({ item }) => <Text> {item.title} </Text> }
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

