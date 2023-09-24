import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contactsList: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contactsList.push(action.payload);
    },
    // removeContact: () => {}
  },
});

const persistConfig = {
    key: 'contactsSlice', 
    storage,
};

export const { addContact } = contactsSlice.actions;
export default persistReducer(persistConfig, contactsSlice.reducer);
