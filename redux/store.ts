import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cryptoReducer from './reducers/cryptoReducer';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
