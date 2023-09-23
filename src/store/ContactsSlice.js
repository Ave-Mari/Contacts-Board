 import { createSlice } from '@reduxjs/toolkit';

 const contactsSlice = createSlice({
     name: 'contacts',
     initialState: {
         contactsList: []
     },
     reducers: 
     {
         addContact: (state, action) => {
            console.log('addContact reducer runs');
            state.contactsList.push(action.payload)
         },
         // removeContact: () => {}
     }
 })
 
export const { addContact } = contactsSlice.actions
export default contactsSlice.reducer
