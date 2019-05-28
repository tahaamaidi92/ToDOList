import {createStore,combineReducers} from 'redux'
import inputReducer from './reducers/inputReducer.js'
import mainReducer from './reducers/mainReducer.js'
const store = createStore(combineReducers({
    input: inputReducer,
    main:mainReducer

}
))

export default store