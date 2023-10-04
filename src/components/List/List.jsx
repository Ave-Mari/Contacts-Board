import React from "react";
//components
import CategoryCard from "../CategoryCard/CategoryBoard";
//styles
import { Wrapper } from "./List.styles";

export default function List({openContactCard}) {
 const boards = ["Unsorted", "Personal", "Family", "Work"];
  return (
    <Wrapper>
      {boards.map((board) => {
        return (
          <CategoryCard 
          openContactCard={openContactCard}
          componentCategory={board} 
          />
        )       
      })}
    </Wrapper>
  );
}
