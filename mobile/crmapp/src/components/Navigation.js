import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
//import * as PeopleList from './PeopleList';
import AddPersona from './AddPersona';
import CompanyList from './CompanyList';

const Navigation = TabNavigator({
    //PeopleList: { screen: PeopleList },
    AddPersona: { screen: AddPersona },
    CompanyList: { screen: CompanyList }
},
TabNavigator.Presets.AndroidTopTabs,
{
    tabBarOptions: {
        lazy: false,
        showLabel: false,
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        style: {
            backgroundColor: 'blue'
        }
    }
});

export default Navigation;

//const NavigationContainer = createAppContainer(Navigator);

/*const Stack = StackNavigator({
    PeopleList: PeopleList,
    AddPersona: AddPersona,
    CompanyList: CompanyList
},
    {
        initialRouteName: "PeopleList"
    }
);*/