import React from 'react';
import { Wrapper } from './CategoryCard.styles'

export default function CategoryCard({category}) {
  return (
    <Wrapper>
        <h2>{category}</h2>
        <div></div>

    </Wrapper>
  )
}
