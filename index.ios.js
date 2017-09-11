/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    NavigatorIOS,
    AppRegistry,
} from 'react-native';

import DDMainView from './src/mainview'

export default class PreWeather extends Component {
    render() {
        return (
            <DDMainView></DDMainView>
        );
    }
}

AppRegistry.registerComponent('PreWeather', () => PreWeather);
