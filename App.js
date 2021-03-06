/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SearchCountries from './Screens/SearchCountries';
import CountryInfo from './Screens/CountryInfo';
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Provider } from "react-redux"
import store from './store/countries'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (<Provider store={store}><Navigation /></Provider>


    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: SearchCountries
    },
    Details: {
      screen: CountryInfo
    }
  },
)
const Navigation = createAppContainer(AppNavigator)
