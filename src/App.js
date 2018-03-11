import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'; 
import * as firebase from 'firebase';

class App extends Component{

    componentWillMount(){
        const config= {
            apiKey: 'AIzaSyDKioDfB6himH0YaS6MDrywpBqetbk-j0o',
    authDomain: 'menager-6febb.firebaseapp.com',
    databaseURL: 'https://menager-6febb.firebaseio.com',
    projectId: 'menager-6febb',
    storageBucket: '',
    messagingSenderId: '991464194846'
        };

        firebase.initializeApp(config); 
    }

    render(){
        return (
            <Provider store={createStore(reducers)}>
            <View>
            <Text>Hello!</Text>
            </View>
            </Provider>
        );
    }
}

export default App; 