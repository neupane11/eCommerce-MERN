import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {homePageProductReducer,individualProductReducer} from './reducer/productReducers'

const reducer=combineReducers({
    homePageProducts:homePageProductReducer,
    individualProduct:individualProductReducer
})

const initialState={}
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store