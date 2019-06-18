import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image'


export default class CountryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.countries.flag)
    return (
      <TouchableHighlight underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate("Details", {}) }}>
        <View style={{
          height: 120, flexDirection: 'row',
          padding: 10,

          borderColor: '#000000',
          borderBottomWidth: 1,

        }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={
              require('../resources/india.png')


            }

          />

          <Text style={{ fontSize: 14, paddingLeft: 10, flex: 1 }}>{this.props.countries.name}  </Text>
        </View>
      </TouchableHighlight >
    );
  }
}
