import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBgsk_xbItwUw6bJL6X2aj4G_XsLvyaFwg",
                authDomain: "chat-a4826.firebaseapp.com",
                databaseURL: "https://chat-a4826.firebaseio.com",
                projectId: "chat-a4826",
                storageBucket: "chat-a4826.appspot.com",
                messagingSenderId: "758996355839",
                appId: "1:758996355839:web:1e2532f6a1ae8c52d29aca",
                measurementId: "G-TZWCXMKMD4"
        };
        firebase.initializeApp(config);
    }

    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    };

    render() {
        return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle = "default" />
        </View>
        );
    }
}