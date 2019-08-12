import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import AddPersona from './AddPersona';
import CompanyList from './CompanyList';

const Navigator = createBottomTabNavigator({
    Personas: { screen: PeopleList },
    Agregar: { screen: AddPersona },
    Empresas: { screen: CompanyList }
},
{
    tabBarOptions: {
        tabBarLabel: 'Personas',
        showIcon: true,
        swipeEnable: false,
        activeTintColor: 'gray',
        inactiveTintColor: '#80cbc4',
        activeBackgroundColor: '#FF5722',
        inactiveBackgroundColor: '#FF7043',
    }
}
)

const NavigationContainer = createAppContainer(Navigator);

export default class Navigation extends Component {
    render() {
        return <NavigationContainer></NavigationContainer>
    }
}

//export default NavigationContainer;

/*const Stack = createStackNavigator({
    Personas: PeopleList,
    Agregar: AddPersona,
    Empresas: CompanyList
},
    {
        initialRouteName: "Personas"
    }
);*/