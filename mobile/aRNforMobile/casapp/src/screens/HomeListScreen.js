import React from 'react';
import { Text, View, FlatList } from 'react-native';
import HouseItem from '../components/HouseItem';
import houses from '../data/houses';

const MOCK_DATA = houses;

export default HomeListScreen = () => {
    return (
        <FlatList
            data={MOCK_DATA}
            renderItem={({ item }) => <HouseItem {...item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}