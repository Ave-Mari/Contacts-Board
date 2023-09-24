import { createSlice } from "@reduxjs/toolkit";

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

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
