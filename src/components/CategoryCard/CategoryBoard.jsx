import React from 'react';
import { useSelector } from 'react-redux';
//components
import ContactCard from '../ContactCard/ContactCard'
import { Wrapper } from './CategoryBoard.styles';

export default function CategoryCard({componentCategory}) {
  const contactsList = useSelector(state => state.contactsSlice.contactsList); 

  return (
    <Wrapper>        
        <div className='category-card'>
        <h2>{componentCategory}</h2>
        <div className='card'>

        {contactsList.map((item) => {
          const {id, name, category} = item;
          if (category === componentCategory) {
            return (
              <ContactCard
              key={id}
              name={name}  
              />
            )
          }
          
        })}
        
          
        </div>
        </div>

    </Wrapper>
  )
}
