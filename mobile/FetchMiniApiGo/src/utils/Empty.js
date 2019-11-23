import React from 'react';
import {Text} from 'react-native';

const Empty = (props) => {
    return (
        <Text
        style={{
            color: '#96004A', alignSelf: 'center',
            paddingTop: '50%', fontWeight: 'bold',
            fontSize: 16, textAlign: 'center' 
        }}
        >
        {`Cargando datos...`}
        </Text>
    )
}

export default Empty
