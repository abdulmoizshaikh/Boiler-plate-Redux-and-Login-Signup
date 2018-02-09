import {combineReducers} from 'redux';
// import {userReducer} from './Reducers';
import {todoReducer} from './Reducers';

export default combineReducers({
    // userRed:userReducer,
    todoRed:todoReducer
})