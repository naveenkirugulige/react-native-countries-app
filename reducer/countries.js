

export default function countriesReducer(state = {
    countries: [],
    isLoading: false,
    input: '',
    countryExists: true
}, action) {
    switch (action.type) {
        case "GET_INPUT":

            return { ...state, input: action.input }
        case "GET_COUNTRIES":

            return { ...state, isLoading: true }

        case "GET_COUNTRIES_SUCCESS":
            //console.log(action.countries.status === 404)
            if (action.countries.status !== 404) return {
                ...state,
                countries: [...action.countries],
                isLoading: false,
                countryExists: true
            }
            else return { ...state, countryExists: false }
        case "GET_COUNTRIES_FAILURE":

            return { ...state, isLoading: false, countries: action.error }
        default:
            return state;
    }

}