import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

//create a componet
const App = () => (
    <Text>some text</Text>
);


AppRegistry.registerComponent('demo',() => App);