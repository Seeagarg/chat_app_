import {configureStore,combineReducers} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import UserSliceReducer from './Slices/UserSlice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key:'root',
    storage
}

const rootReducer= combineReducers({
    UserSlice:UserSliceReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer);


export const store = configureStore({
    reducer:persistedReducer
})


export const persistor = persistStore(store)