import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import PeopleList from './PeopleList';
import AddPersona from './AddPersona';
import CompanyList from './CompanyList';

const Presets = {
  AndroidTopTabs: {
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: false,
    lazy: false,
  },
};

TabNavigator.Presets = {
  AndroidTopTabs: Presets.AndroidTopTabs,
  Default: Presets.AndroidTopTabs
};

const Navigation = TabNavigator({
    PeopleList: { screen: PeopleList },
    AddPersona: { screen: AddPersona },
    CompanyList: { screen: CompanyList }
},
{
    ...TabNavigator.Presets.AndroidTopTabs,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        style: {
            backgroundColor: 'blue'
        },
    },
});

export default Navigation;