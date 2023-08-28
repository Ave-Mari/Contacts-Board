import { useState } from 'react';
import './index.css';
import { Wrapper } from './App.styles'

function App() {

  return (
    <Wrapper>
      <header>
        <h1>Contacts Board</h1>
        <button className='info-btn'>i</button>
        <button className='add-btn'>+</button>
      </header>
      <h1></h1>
    </Wrapper>
  )
}

export default App
