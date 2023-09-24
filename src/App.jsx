import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addContact} from './store/ContactsSlice'
//components
import Header from './components/Header/Header';
import List from './components/List/List';
import Popup from './components/Popup/Popup';
//styles
import './index.css';
//files
import Delete from './delete.svg'

function App() { 
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contactsList);  

  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'unsorted'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({...formData, id: new Date().valueOf()}));
    setFormVisible(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: ''
    })
      
  }
  
  const inputTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,

    })
  }

  const inputRadioChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value
    })
  }

  const openForm = () => {
    setFormVisible(true);
  }

  const openInfo = () => {
    setInfoVisible(true)
  }

  const closePopup = () => {
    setFormVisible(false);
    setInfoVisible(false);
  }  

    return (
    <main>
      {/* <Popup
      view="contact-more"
      content={
        <div className='contact-more-content'>
          <button className='delete'>
            <img className='delete-img' src={Delete} alt="delete"></img>
          </button>
          <div className='image'></div>
          <h3 className='name'>Alan Smith</h3>
          <p className='phone'>+4858383389</p>
          <p className='email'>helloalan@example.com</p>
        </div>

      } 
      /> */}

      {infoVisible &&
        <Popup 
        view='info'
        closePopup={closePopup}
        content={
          <div className='info-content'>
          <p>This application can help you create and sort your contacts. 
          After adding your contact to list you can move it through categories using drag and drop feature. You can also open your contact from list to see more info or delete it from list.
          </p>
          <p>Github: <a>https://github.com/Ave-Mari</a></p>
          </div>

        }
/>
      
      }
     
      {formVisible &&
       <Popup 
       view='create-contact'
       closePopup={closePopup}
       content={
         <form className='create-content' onSubmit={handleSubmit}>
           <h3 className='form-headline'>Create contact</h3>

           <input
            name='name'
            value={formData.name}
            onChange={inputTextChange}
            type="text"
            placeholder='Name'
            className='text-input'
            />
           <input
            name='phone'
            value={formData.phone}
            onChange={inputTextChange}
            type="text"
            placeholder='Phone'
            className='text-input'
            />
           <input
            name='email'
            value={formData.email}
            onChange={inputTextChange}
            type="email"
            placeholder='E-mail'
            className='text-input'
            />

           <p className='category'>Category:</p>
           <div className="radio-block">
         <div className="radio">
         <input
          value='Unsorted'
          onChange={inputRadioChange}
          id="radio-1"
          name="categoty"
          type="radio"
          />
         <label htmlFor="radio-1" className="radio-label">Unsorted</label>
       </div>

       <div className="radio">
         <input
          value='Personal'
          onChange={inputRadioChange}
          id="radio-2"
          name="categoty"
          type="radio"
          />
         <label htmlFor="radio-2" className="radio-label">Personal</label>
       </div>

       <div className="radio">
         <input
          value='Family'
          onChange={inputRadioChange}
          id="radio-3"
          name="categoty"
          type="radio"
          />
         <label  htmlFor="radio-3" className="radio-label">Family</label>
       </div>

       <div className="radio">
         <input
          value='Work'
          onChange={inputRadioChange}
          id="radio-4"
          name="categoty"
          type="radio"
          />
         <label  htmlFor="radio-4" className="radio-label">Work</label>
       </div>
 
     </div>

     <button type="submit" className='add-btn'>Add Contact</button>

         </form>
       }
     />
      
    
    }    
    
      
      <Header 
      openForm={openForm}
      openInfo={openInfo}
      
      />
      <List />
    </main>
  )
}

export default App
