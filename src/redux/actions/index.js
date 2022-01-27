import axios from 'axios'
export const ADD_TO_FAVOURITE_COMPANIES = 'ADD_TO_FAVOURITE_COMPANIES'
export const REMOVE_FROM_FAVOURITE_COMPANIES = 'REMOVE_FROM_FAVOURITE_COMPANIES'
export const SET_USER = 'SET_USER'
export const SET_JOBS_TO_DISPLAY = 'SET_JOBS_TO_DISPLAY'
export const SET_JOBS_TO_DISPLAY_ERROR = 'SET_JOBS_TO_DISPLAY_ERROR'

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

export const setJobsToDisplayAction = (selectedCategory, searchTerm) => {
    return async (dispatch) => {
        try {
            if (selectedCategory) {
                const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?category=${ selectedCategory }&limit=10`)
                if (response.status === 200) {
                    dispatch({ type: SET_JOBS_TO_DISPLAY, payload: response.data.data })
                } else {
                    dispatch({ type: SET_JOBS_TO_DISPLAY_ERROR, payload: response.status })
                }
            } else {
                const response = await axios.get(`https://strive-jobs-api.herokuapp.com/jobs?search=${ searchTerm }&limit=10`)
                if (response.status === 200) {
                    dispatch({ type: SET_JOBS_TO_DISPLAY, payload: response.data.data })
                } else {
                    dispatch({ type: SET_JOBS_TO_DISPLAY_ERROR, payload: response.status })
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}