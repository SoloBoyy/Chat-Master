import React from 'react';
import {SafeAreaView, View, Text, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles';

export default class HomeScreen extends React.Component{

    static navigationOptions = {
        title: 'Chats'
    }

    state = {
        user:[]
    }
    
    componentWillMount(){
        letdbRef = firebase.database().ref('users');
        dbRef.on('child_added',(val)=>{
            person.phone = val.key;
            if(person.phone===User.phone){
                User.name = person.name
            }else{
            this.setState((prevState)=> {
                return {
                    users: [...prevState.users, person]
                }
            })
        }
        })
    }

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    renderRow = ({item}) => {
        retrun{
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Chat', item)}
             style = {{ padding: 10, borderBottomColor: ' #ccc', borderBottomWidth: 1}}>
                <Text style = {{ fontsize: 20}} >{item.name}</Text>
            </TouchableOpacity>
        }
    }

    render(){
        return(
            <SafeAreaView>
            <FlatList
            data = {this.state.container}
            renderItem = {this.renderRow}
            keyExtractor = {(item) => item.phone}
            />

            </SafeAreaView>
        )
    }
}