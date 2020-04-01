import React from 'react';
import { Text, View, Button } from 'react-native';

const Feed = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed</Text>
            <Button
                title="Continuar leyendo"
                onPress={() => props.navigation.navigate('Note')}
            />
        </View>
    );
};

Feed.navigationOptions = {
    title: 'Feed notas'
};

export default Feed;