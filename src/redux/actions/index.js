export const ADD_TO_FAVOURITE_COMPANIES = 'ADD_TO_FAVOURITE_COMPANIES'
export const REMOVE_FROM_FAVOURITE_COMPANIES = 'REMOVE_FROM_FAVOURITE_COMPANIES'
export const SET_USER = 'SET_USER'

export const addToFavouriteCompaniesAction = (company) => ({
    type: ADD_TO_FAVOURITE_COMPANIES,
    payload: company
})

export const removeFromFavouriteCompaniesAction = (company) => ({
    type: REMOVE_FROM_FAVOURITE_COMPANIES,
    payload: company
})

export const setUserAction = (username) => ({
    type: SET_USER,
    payload: username
})