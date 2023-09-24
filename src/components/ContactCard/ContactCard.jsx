import React from 'react';
//styles
import { Card } from './ContactCard.styles'

export default function ContactCard({name}) {
  return (
    <Card>
        <div className="photoPrev"></div>
        <h3 className="namePrev">{name}</h3>
        <button className='btnShowMore'>⋅⋅⋅</button>

    </Card>
  )
}
