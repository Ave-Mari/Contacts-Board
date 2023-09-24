import React from 'react';
//components
import CategoryCard from '../CategoryCard/CategoryBoard'
//styles
import { Wrapper } from './List.styles'


export default function () {
  return (
    <Wrapper>
      <CategoryCard category="Unsorted"/>
      <CategoryCard category="Personal"/>
      <CategoryCard category="Family"/>
      <CategoryCard category="Work"/>        
    </Wrapper>
  )
}
