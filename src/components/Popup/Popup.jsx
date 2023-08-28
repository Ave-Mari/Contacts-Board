import React from 'react';
import { Block } from './Popup.styles'

export default function Popup({ content }) {
  return (
    <Block>
        <button className='close-btn'>✕</button>

        {content}

    </Block>
  )
}
