import React, { Component } from 'react'
import { StyleSheet, ScrollView, ListView } from 'react-native';
import ArtistBox from './artistbox';

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.artistas),
        };
    }

    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(artista) => <ArtistBox artista={artista}></ArtistBox>}
            />
            /*<ScrollView style={styles.container}>
              {
                Array(500).fill(artista).map(artista=>{
                  return <ArtistBox artista={artista}></ArtistBox>
                })
              }
            </ScrollView>*/
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 30
    }
});
