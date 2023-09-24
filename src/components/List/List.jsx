import React from 'react';
//components
import CategoryCard from '../CategoryCard/CategoryBoard'
//styles
import { Wrapper } from './List.styles'


export default function () {
  return (
    <Wrapper>
      <CategoryCard componentCategory="Unsorted"/>
      <CategoryCard componentCategory="Personal"/>
      <CategoryCard componentCategory="Family"/>
      <CategoryCard componentCategory="Work"/>        
    </Wrapper>
  )
}
