import React from 'react';
import { Text, View, FlatList } from 'react-native';
import HouseItem from '../components/HouseItem';
//import houses from '../data/houses';

export default class HomeListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        }
    }
    componentDidMount() {
        return fetch("https://www.akshatpaul.com/list-properties")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <HouseItem {...item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}        