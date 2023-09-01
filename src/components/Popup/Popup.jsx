import React from 'react';
import { Block } from './Popup.styles'

export default function Popup({ content, view, closePopup }) {
  return (
    <Block view={view}>
        <button className='close-btn' onClick={closePopup}>✕</button>

        {content}

    </Block>
  )
}
