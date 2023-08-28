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
            <h3>Create contact</h3>

            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Phone'/>
            <input type="email" placeholder='E-mail'/>

            <p>Category:</p>
            <div className="radio-block">
              <label>
                <input type="radio" />
                  Uncorted
              </label>
              <label>
                <input type="radio" />
                  Personal
              </label>
              <label>
                <input type="radio" />
                  Family
              </label>
              <label>
                <input type="radio" />
                  Work
              </label>
              
              
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
