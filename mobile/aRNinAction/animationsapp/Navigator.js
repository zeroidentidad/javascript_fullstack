import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TopNavigation from './src/TopNavigation';
import AnimatedInput from './src/AnimatedInput';
import AnimatedLoop from './src/AnimatedLoop';
import AnimatedParallel from './src/AnimatedParallel';
import AnimatedSequence from './src/AnimatedSequence';
import AnimatedStagger from './src/AnimatedStagger';
import AnimatedTiming from './src/AnimatedTiming';

const AppNavigator = createStackNavigator({
    Input: AnimatedInput,
    Loop: AnimatedLoop,
    Parallel: AnimatedParallel,
    Sequence: AnimatedSequence,
    Stagger: AnimatedStagger,
    Timing: AnimatedTiming
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            title: ' Animated API RN',
            headerStyle: {
                backgroundColor: '#4b89a3',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (<TopNavigation navigation={navigation} />)                        
        }
    },
    initialRouteName: 'Input'
})

export default createAppContainer(
    createSwitchNavigator({
        App: AppNavigator
    }, {
        initialRouteName: "App"
    })
)