import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Chatscreen from './screens/ChatScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';


const AppStack = createStackNavigator ({Home: HomeScreen, Chat: Chatscreen});
const AuthStack = createStackNavigator ({ Login: LoginScreen});

export default createAppContainer(createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRoutName: 'AuthLoading',
  }
));