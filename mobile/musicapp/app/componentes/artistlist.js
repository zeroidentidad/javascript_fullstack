import React, { Component } from 'react'
import { StyleSheet, ScrollView, ListView, TouchableOpacity } from 'react-native';
import ArtistBox from './artistbox';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { dataSource: ds };
    }

    componentDidMount(){
        this.actualizarDataSource(this.props.artistas)
    }

    componentWillReceiveProps(newProps){
        if (newProps.artistas !== this.props.artistas){
            this.actualizarDataSource(newProps.artistas)
        }
    }

    actualizarDataSource = datos => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(datos)
        })        
    }

    handlePress(artista){
        Actions.detalle({ artista });
    }   

    render() {

        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(artista) => { 
                    return (
                    <TouchableOpacity onPress={()=>this.handlePress(artista)}>
                    <ArtistBox artista={artista}></ArtistBox>
                    </TouchableOpacity>
                    )
                    }
                }
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
        paddingTop: 10
    }
});
