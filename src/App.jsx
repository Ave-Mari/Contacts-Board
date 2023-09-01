import { useState } from 'react';
import { addFormData } from './formActions'
//components
import Header from './components/Header/Header';
import List from './components/List/List';
import Popup from './components/Popup/Popup';
//styles
import './index.css';

function App() { 

  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: ''
  })

  const handleSubmit = () => {
    e.preventDefault();
    const id = new Date().valueOf();
    addFormData(id, formData);
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
      [name]: value
    })
  }

  const inputRadioChange = (e) => {
    setFormData({
      ...formData,
      radioButton: e.target.value
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
      {infoVisible &&
        <Popup 
        closePopup={closePopup}
        content={
          <div className='info-content'>
          <p>This application can help you create and sort your contacts. 
          After adding your contact to list you can move it through categories using drag and drop feature. You can also open your contact from list to see more info or delete it from list.
          </p>
          <p>Github: https://github.com/Ave-Mari </p>
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
            value={formData.name}
            onChange={inputTextChange}
            type="text"
            placeholder='Name'
            className='text-input'
            />
           <input
            value={formData.phone}
            onChange={inputTextChange}
            type="text"
            placeholder='Phone'
            className='text-input'
            />
           <input
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
          value='unsorted'
          onChange={inputRadioChange}
          id="radio-1"
          name="radio"
          type="radio"
          />
         <label htmlFor="radio-1" className="radio-label">Unsorted</label>
       </div>

       <div className="radio">
         <input
          value='personal'
          onChange={inputRadioChange}
          id="radio-2"
          name="radio"
          type="radio"
          />
         <label htmlFor="radio-2" className="radio-label">Personal</label>
       </div>

       <div className="radio">
         <input
          value='family'
          onChange={inputRadioChange}
          id="radio-3"
          name="radio"
          type="radio"
          />
         <label  htmlFor="radio-3" className="radio-label">Family</label>
       </div>

       <div className="radio">
         <input
          value='work'
          onChange={inputRadioChange}
          id="radio-4"
          name="radio"
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
