const getInputAction = (input) => ({ type: "GET_INPUT", input })
const getCountriesAction = (countryName) => ({ type: "GET_COUNTRIES", countryName })
const getCountriesSuccessAction = (countries) => ({ type: "GET_COUNTRIES_SUCCESS", countries })
const getCountriesFailureAction = (error) => ({ type: "GET_COUNTRIES_FAILURE", error })

export default {
    getCountriesAction, getCountriesSuccessAction, getCountriesFailureAction, getInputAction
}