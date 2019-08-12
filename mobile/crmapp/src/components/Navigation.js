import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import AddPersona from './AddPersona';
import CompanyList from './CompanyList';

const Navigation = createBottomTabNavigator({
    PeopleList: { screen: PeopleList },
    AddPersona: { screen: AddPersona },
    CompanyList: { screen: CompanyList }
},
{
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        swipeEnable: true,
        tintColor: 'gray',
        inactiveTintColor: '#80cbc4',
        style: {
            backgroundColor: '#26a69a',
        },
    }
}
)

//const NavigationContainer = createAppContainer(Navigator);

export default Navigation;

/*const Stack = createStackNavigator({
    Personas: PeopleList,
    Agregar: AddPersona,
    Empresas: CompanyList
},
    {
        initialRouteName: "Personas"
    }
);*/