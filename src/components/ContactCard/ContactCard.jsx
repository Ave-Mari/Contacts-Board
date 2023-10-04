import React, { useContext } from "react";
import OpenContext from "../../App";
//styles
import { Card } from "./ContactCard.styles";

export default function ContactCard({ id, name, openContactCard }) {
  return (
    <Card>
      <div className="photoPrev"></div>
      <h3 className="namePrev">{name}</h3>
      <button className="btnShowMore" onClick={(e) => openContactCard(e, id)}>
        ⋅⋅⋅
      </button>
    </Card>
  );
}
