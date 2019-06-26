import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, WebView } from 'react-native';
import FastImage from 'react-native-fast-image'



export default class CountryListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svgFlag: ''
    };
  }
  componentDidMount() {
    this.fetchCountries()
  }

  async fetchCountries() {
    console.log(this.props.countryFlag)
    let flag = await fetch(this.props.countryFlag);
    let flagText = await flag.text()
    flagText = this.editFlagSvg(flagText)
    this.setState({
      svgFlag: flagText
    })
  }

  editFlagSvg(svg) {

    if (svg.match(/viewBox/)) {
      return (svg)


    }
    else {
      let height = svg.match(/(?:height ?= ?")([0-9]+)(?=")/)[1]

      let width = svg.match(/(?:width ?= ?")([0-9]+)(?=")/)[1]
      return (svg.replace("<svg", `<svg viewBox="0,0,${width},${height}" `))

    }
  }

  render() {
    console.log(this.state.flagText)

    return (

      <TouchableHighlight underlayColor={'lightgrey'} onPress={() => { this.props.navigation.navigate("Details", {}) }}>
        <View style={{
          height: 120, flexDirection: 'row',


          borderColor: '#000000',
          borderBottomWidth: 1,

        }}>
          {/* <Image
            style={{ width: 50, height: 50, borderRadius: 20, }}
            source={
              require('../resources/india.png')


            }

          /> */}
          <View style={{ height: 118, width: 118 }}>
            <WebView
              originWhitelist={["*"]}
              scalesPageToFit={true}
              useWebKit={false}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              source={{
                html: `<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>${
                  this.state.svgFlag
                  }</body></html>`
              }}
            />
          </View>

          <Text style={{ fontSize: 14, paddingLeft: 25, paddingTop: 40, flex: 1 }}>{this.props.countryName}  </Text>
        </View>
      </TouchableHighlight >
    );
  }
}
