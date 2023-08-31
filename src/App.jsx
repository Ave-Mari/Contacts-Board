import { useState } from 'react';
//components
import Header from './components/Header/Header';
import List from './components/List/List';
import Popup from './components/Popup/Popup';
//styles
import './index.css';

function App() {

  return (
    <main>
      {/* <Popup 
        content={
          <div className='info-content'>
          <p>This application can help you create and sort your contacts. 
          After adding your contact to list you can move it through categories using drag and drop feature. You can also open your contact from list to see more info or delete it from list.
          </p>
          <p>Github: https://github.com/Ave-Mari </p>
          </div>

        }
      /> */}
      <Popup 
        view='create-contact'
        content={
          <div className='create-content'>
            <h3 className='form-headline'>Create contact</h3>

            <input type="text" placeholder='Name' className='text-input'/>
            <input type="text" placeholder='Phone' className='text-input'/>
            <input type="email" placeholder='E-mail' className='text-input'/>

            <p className='category'>Category:</p>
            <div class="radio-block">
        <div class="radio">
          <input id="radio-1" name="radio" type="radio" checked />
          <label for="radio-1" class="radio-label">Unsorted</label>
        </div>

        <div class="radio">
          <input id="radio-2" name="radio" type="radio" />
          <label  for="radio-2" class="radio-label">Personal</label>
        </div>

        <div class="radio">
          <input id="radio-3" name="radio" type="radio" />
          <label  for="radio-3" class="radio-label">Family</label>
        </div>

        <div class="radio">
          <input id="radio-4" name="radio" type="radio" />
          <label  for="radio-4" class="radio-label">Work</label>
        </div>
  
      </div>

          </div>
        }
      />
    
      
      <Header />
      <List />
    </main>
  )
}

export default App
