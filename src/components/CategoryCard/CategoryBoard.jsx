import React from 'react';
//components
import ContactCard from '../ContactCard/ContactCard'
import { Wrapper } from './CategoryBoard.styles';

export default function CategoryCard({category}) {
  return (
    <Wrapper>
        
        <div className='category-card'>
        <h2>{category}</h2>
        <div className='card'>

          <ContactCard />
          
        </div>
        </div>

    </Wrapper>
  )
}
