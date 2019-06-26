import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux"
import countriesAction from '../actions/countries'
import CountryListItem from "./CountryListItem";




class SearchCountries extends Component {

    ChangeTextOnInput(text) {
        this.props.dispatch(countriesAction.getInputAction(text));
    }
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            isLoading: false,
            input: ''

        };
    }

    searchCountries = () => {

        this.props.dispatch(countriesAction.getCountriesAction(this.props.input))
    }

    renderItemPresent() {
        return (
            < View >
                <View style={styles.Container}>

                    <TextInput
                        style={styles.TextInput}
                        vlaue={this.props.input}
                        placeholder='Enter Country Name'
                        onChangeText={this.ChangeTextOnInput.bind(this)}

                    />

                    <Button


                        title="Search"
                        color="#a8abaf"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={this.searchCountries}
                    />

                </View>
                <View >

                    <FlatList
                        data={this.props.countries}
                        extraData={this.props}
                        renderItem={({ item }) => <CountryListItem countryName={item.name} countryFlag={item.flag} navigation={this.props.navigation} />}
                        keyExtractor={(item) => `${item.numericCode}`

                        }

                    />
                    {this.props.isLoading && (
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>...Loading</Text>
                    )}


                </View>
            </View >
        );

    }

    renderItemNotPresent() {
        return (
            <View>
                <View style={styles.Container}>

                    <TextInput
                        style={styles.TextInput}
                        vlaue={this.props.input}
                        placeholder='Enter Country Name'
                        onChangeText={this.ChangeTextOnInput.bind(this)}

                    />

                    <Button


                        title="Search"
                        color="#a8abaf"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={this.searchCountries}
                    />



                </View>
                <Text> Country Name not found</Text>
            </View>
        );

    }


    render() {
        console.log(this.props.countryExists)
        if (this.props.countryExists)
            return (
                this.renderItemPresent()
            );

        else return (this.renderItemNotPresent());

    }
}
const styles = StyleSheet.create({
    Container: {
        marginTop: 0,
        flexDirection: 'row'
    },
    TextInput: {

        width: '75%',

        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 0,
    },


});

function mapStateToProps(state) {

    return {
        countries: state.countries,
        isLoading: state.isLoading,
        input: state.input,
        countryExists: state.countryExists
    }
}
export default connect(mapStateToProps)(SearchCountries)