import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { favouritesReducer, jobsReducer, userReducer } from '../reducers'
import thunk from 'redux-thunk'

const ultimateCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    companies: {
        favouriteCompanies: [],
    },
    users: {
        user: ''
    },
    jobs: {
        jobsToDisplay: [],
        errorCode: false,
        isLoading: false
    }
}

const mainReducer = combineReducers({
    companies: favouritesReducer,
    users: userReducer,
    jobs: jobsReducer
})

const configureStore = createStore(
    mainReducer,
    initialState,
    ultimateCompose(applyMiddleware(thunk))
)

export default configureStore