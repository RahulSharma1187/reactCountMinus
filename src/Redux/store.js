import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger'
import BookReducer from './book/bookReducer';
import PenReducer from './pen/penReducer'


const rootReducer = combineReducers({
    book: BookReducer,
    pen : PenReducer
})

//const store = createStore(BookReducer,  applyMiddleware(logger));

const store = createStore(rootReducer, applyMiddleware(logger));


export default store;