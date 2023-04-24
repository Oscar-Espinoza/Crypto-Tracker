import {configureStore, Action, ThunkAction} from '@reduxjs/toolkit';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
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

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;

