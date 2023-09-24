import React, { useContext } from 'react';
import OpenContext from '../../App'
//styles
import { Card } from './ContactCard.styles'

export default function ContactCard({name}) {
    const openContactCard = useContext(OpenContext)
  return (
    <Card>
        <div className="photoPrev"></div>
        <h3 className="namePrev">{name}</h3>
        <button className='btnShowMore' onClick={openContactCard}>⋅⋅⋅</button>

    </Card>
  )
}
