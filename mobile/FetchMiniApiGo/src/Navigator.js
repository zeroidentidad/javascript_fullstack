import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ListadoScreen from './screens/ListadoScreen';

const SplashNavigator = createStackNavigator({
    Splash: SplashScreen
}, {
    initialRouteName: 'Splash',
    header: null,
    headerMode: 'none'
})

const TopTabNavigator = createMaterialTopTabNavigator({
    Home: HomeScreen,
    Listado: ListadoScreen,
}, {
    tabBarOptions: {
        labelStyle: {
            color: 'black',
            fontSize: 14,
            fontWeight: 'bold'
        },
        style: {
            backgroundColor: '#ff7866',
            shadowColor: '#1a0d00',
            borderColor: '#1a0d00',
            borderStyle: 'solid',
            borderRadius: 2,
            borderWidth: 1
        },
        upperCaseLabel: false
    },   
    initialRouteName: 'Home'
})

const AppNavigator = createStackNavigator({
    Home: TopTabNavigator,
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            title: 'Cliente MiniApi',
            headerStyle: {
                backgroundColor: '#003782',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                flexGrow: 1,
                alignSelf: 'center',
                textAlignVertical: 'center'
            }
        }
    }
})

export default createAppContainer(
    createSwitchNavigator({
        App: AppNavigator,
        Splash: SplashNavigator
    }, {
        initialRouteName: "Splash"
    })
)