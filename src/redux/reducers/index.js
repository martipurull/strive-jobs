import { ADD_TO_FAVOURITE_COMPANIES, REMOVE_FROM_FAVOURITE_COMPANIES } from '../actions'
import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE_COMPANIES: {
            return {
                ...state,
                favouriteCompanies: state.favouriteCompanies.concat(action.payload)
            }
        }
        case REMOVE_FROM_FAVOURITE_COMPANIES: {
            return {
                ...state,
                favouriteCompanies: state.favouriteCompanies.filter(com => com !== action.payload)
            }
        }
        default: return state
    }
}