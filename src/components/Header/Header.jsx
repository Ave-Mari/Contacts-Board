import React from 'react';
import { Wrapper } from './Header.styles'

export default function Header() {
  return (
    <Wrapper> 
        <h1>Contacts Board</h1>
        <button className='info-btn'>i</button>
        <button className='add-btn'>+</button>
    </Wrapper>
  )
}
