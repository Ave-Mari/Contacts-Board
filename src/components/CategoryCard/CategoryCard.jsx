import React from 'react';
import { Wrapper } from './CategoryCard.styles'

export default function CategoryCard({category}) {
  return (
    <Wrapper>
        
        <div className='category-card'>
        <h2>{category}</h2>
        <div className='card'></div>
        </div>

    </Wrapper>
  )
}
