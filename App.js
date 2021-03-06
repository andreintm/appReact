import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

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

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        )
    }
}

export default App;
