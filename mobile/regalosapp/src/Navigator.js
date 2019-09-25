import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoading from './screens/AuthLoading';
import AddEventScreen from './screens/events/AddEventScreen';
import EventScreen from './screens/events/EventScreen';

const Authnavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Login: LoginScreen
},{
    initialRouteName: "SignUp"
})

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    AddEvent: AddEventScreen,
    Event: EventScreen
},{
    defaultNavigationOptions: ({navigation}) => {
        return {
            title: 'Eventos 🎁'
        }
    },
    initialRouteName: 'Home'
})

export default createAppContainer(
    createSwitchNavigator({
        Auth: Authnavigator,
        App: AppNavigator,
        AuthLoading: AuthLoading
    },{
        initialRouteName: "AuthLoading"
    })
)