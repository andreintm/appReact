import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene key='login' component={LoginForm} title="Please Login"/>
                <Scene key='employeeList' component={EmployeeList} title="Employees"/>
            </Stack>
        </Router>
    );
};

export default RouterComponent;