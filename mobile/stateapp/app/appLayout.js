import React from "react";
import { StyleSheet, Text, View} from 'react-native';


function AppLayout(props) {
    
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, padding: 10 }}>
                {props.saludo}{"\n"}
                Usuario: {props.userName}{"\n"}
                Password: {props.password}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})


export default AppLayout