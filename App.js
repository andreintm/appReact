import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component{

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAh_8Glnjfs0e69s2Qn552HbFxqGstwaUo",
            authDomain: "managerapp-288b1.firebaseapp.com",
            databaseURL: "https://managerapp-288b1.firebaseio.com",
            projectId: "managerapp-288b1",
            storageBucket: "",
            messagingSenderId: "730258058633"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm></LoginForm>
            </Provider>
        )
    }
}

export default App;
