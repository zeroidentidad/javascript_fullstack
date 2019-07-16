import React from 'react';
import {View, Text} from 'react-native'

function ListLayout(props) {

    return(
        <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 24 }}>
                {props.data.nombre}
            </Text>
        </View>
    )
    
}

export default ListLayout