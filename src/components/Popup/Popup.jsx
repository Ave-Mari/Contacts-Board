import React from "react";
import { PopupWrapper } from "./Popup.styles";

export default function Popup({ content, view, closePopup }) {

  
  return (
    <PopupWrapper className="wrapper" onClick={closePopup}>
      <div className="popup-block" id={view}>
        <button className="close-btn" onClick={closePopup}>
          ✕
        </button>
        {content}
      </div>
    </PopupWrapper>
  );
}
