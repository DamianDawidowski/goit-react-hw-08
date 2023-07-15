import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
import contactReducer  from './contacts/contactsSlice';
import filterReducer from './contacts/filterSlice'; 
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from "./auth/authSlice";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

 
export const store = configureStore({
    reducer: {
      auth: persistReducer(persistConfig, authReducer),
      contacts: contactReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
 
  });

  export const persistor = persistStore(store);