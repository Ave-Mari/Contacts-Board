import React from 'react';
import { Wrapper } from './Header.styles'

export default function Header({openForm, openInfo}) {
  return (
    <Wrapper> 
        <h1>Contacts Board</h1>
        <button className='info-btn' onClick={openInfo}>i</button>
        <button className='add-btn' onClick={openForm}>+</button>
    </Wrapper>
  )
}
