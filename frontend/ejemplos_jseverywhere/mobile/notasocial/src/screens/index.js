import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screen components
import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NoteScreen from './note';

const FeedStack = createStackNavigator({
    Feed: Feed,
    Note: NoteScreen
});
const MyStack = createStackNavigator({
    MyNotes: MyNotes,
    Note: NoteScreen
});
const FavStack = createStackNavigator({
    Favorites: Favorites,
    Note: NoteScreen
});

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home-variant" size={24} color={tintColor} />
            )
        }
    },
    MyNoteScreen: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: 'Mis Notas',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
            )
        }
    },
    FavoriteScreen: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="star" size={24} color={tintColor} />
            )
        }
    }
});

// create app container
export default createAppContainer(TabNavigator);