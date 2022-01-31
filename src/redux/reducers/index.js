import { ADD_TO_FAVOURITE_COMPANIES, REMOVE_FROM_FAVOURITE_COMPANIES, SET_JOBS_TO_DISPLAY, SET_JOBS_TO_DISPLAY_ERROR, SET_LOADING, SET_USER } from '../actions'
import { initialState } from '../store'

export const favouritesReducer = (state = initialState.companies, action) => {
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

export const userReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default: return state
    }
}

export const jobsReducer = (state = initialState.jobs, action) => {
    switch (action.type) {
        case SET_JOBS_TO_DISPLAY: {
            return {
                ...state,
                jobsToDisplay: action.payload,
            }
        }
        case SET_JOBS_TO_DISPLAY_ERROR: {
            return {
                ...state,
                errorCode: action.payload,
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: return state
    }
}