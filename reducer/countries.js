

export default function countriesReducer(state = {
    countries: [],
    isLoading: false,
    input: ''
}, action) {
    switch (action.type) {
        case "GET_INPUT":
            console.log(action.input)
            return { ...state, input: action.input }
        case "GET_COUNTRIES":

            return { ...state, isLoading: true }

        case "GET_COUNTRIES_SUCCESS":
            //console.log(action.contacts.results)
            return {
                countries: [...action.countries],
                isLoading: false
            }
        case "GET_COUNTRIES_FAILURE":

            return { ...state, isLoading: false, countries: action.error }
        default:
            return state;
    }

}