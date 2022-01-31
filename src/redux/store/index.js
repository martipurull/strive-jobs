import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { favouritesReducer, jobsReducer, userReducer } from '../reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'

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

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => console.log('encryption error: ', error)
        }),
    ]
}

const mainReducer = combineReducers({
    companies: favouritesReducer,
    users: userReducer,
    jobs: jobsReducer
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const configureStore = createStore(
    persistedReducer,
    initialState,
    ultimateCompose(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)