// /** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Hearder from './src/components/header';

//create a componet
const App = () => (
    <Hearder/>
);


AppRegistry.registerComponent('demo',() => App);