import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./ContactsSlice";

const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice,
  },
});

export default store;
