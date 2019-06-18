import { put, select } from 'redux-saga/effects'
import countriesAction from '../actions/countries'
import { takeLatest } from 'redux-saga/effects'
const countriesUrl = "https://restcountries.eu/rest/v2/name/"
function* getCountries(action) {
    try {
        //console.log(action.countryName)
        let countriesResponse = yield fetch(`https://restcountries.eu/rest/v2/name/${action.countryName}`)
        let countries = yield countriesResponse.json()

        yield put(countriesAction.getCountriesSuccessAction(countries));

    } catch (error) {

        yield put(countriesAction.getCountriesFailureAction(error))
    }
}

export default function* watchTypeTolistenFor() {
    yield takeLatest('GET_COUNTRIES', getCountries)
}