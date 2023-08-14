import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'

// add the reducers that need to be persisted
const reducersToPersist: string[] = ['counter', 'user'];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: reducersToPersist
};

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };