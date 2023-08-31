import React from 'react';
import { Block } from './Popup.styles'

export default function Popup({ content, view }) {
  return (
    <Block view={view}>
        <button className='close-btn'>✕</button>

        {content}

    </Block>
  )
}
