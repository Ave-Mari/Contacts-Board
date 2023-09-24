import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import contactsSlice from "./ContactsSlice";
import persistConfig from '../persistConfig';

export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice,
  },
});

export const persistor = persistStore(store);


