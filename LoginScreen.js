import React from 'react';
import {Text, Alert, AsyncStorage, TouchableOpacity, TextInput, View} from 'react-native';
import firebase from 'firebase';
import User from '../User';
import styles from '../constants/styles';

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        header: null
    }
    state = {
      phone: '',
      name: ''
    }
    
    handleChange = key => val => {
      this.setState({ [key]: val})
    }
    
    componentWillMount (){
      AsyncStorage.getItem('userPhone').then(val=>{
        if(val){
          this.setState({phone: val})
        }
      })
    }
    
    
    submitForm = () => {//makes sure users info is correct then saves it
      if (this.state.phone.length < 10){
        Alert.alert ('error wrong number')
      }
      else{
        await AsyncStorage.setItem('userPhone',this.state.phone);
        User.phone = this.state.phone;
        firebase.database().ref('users/' + User.phone).set({name: this.state.name});
        this.props.navigation.navigate('App');
      }
    }
    
      render () {
        //this gives placeholders for textboxes and how they should function
        return (
          <View style = {Styles.container}>
            <TextInput placeholder = "Number"
            keyboardType = "number-pad"
            style = {Styles.input}
            value = {this.state.phone}
            onChangeText = {this.handleChange('phone')}
            />
            <TextInput placeholder = "Name"
            style = {styles.input}
            value = {this.state.name}
            onChangeText = {this.handleChange('name')}
            />
            <TouchableOpacity onPress = {this.submitForm}>
              <Text>Enter</Text>
            </TouchableOpacity>
    
          </View>
        );
      }
    }
    
