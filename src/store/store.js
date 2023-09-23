import { combineReducers } from 'redux';
import contactsSlice from './ContactsSlice'

const rootReducer = combineReducers({
    reducer: {
        contactsSlice: contactsSlice
    }
})

export default rootReducer