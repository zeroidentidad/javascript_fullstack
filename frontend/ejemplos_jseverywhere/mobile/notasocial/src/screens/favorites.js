import React from 'react';
import { Text, View } from 'react-native';

const Favorites = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favoritos</Text>
        </View>
    );
};

Favorites.navigationOptions = {
    title: 'Favoritos'
};

export default Favorites