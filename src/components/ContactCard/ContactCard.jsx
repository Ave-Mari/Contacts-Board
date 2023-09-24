import React from 'react';
//styles
import { Card } from './ContactCard.styles'

export default function ContactCard() {
  return (
    <Card>
        <div classname="photoPrev"></div>
        <h3 className="namePrev">Name Name</h3>
        <button className='btnShowMore'>⋅ ⋅ ⋅</button>

    </Card>
  )
}
