import React from "react";
import SingleItem from "./SingleItem";
function List({ students, name }) {
  return (
    <div>
      {students.map((elt) => (
        <SingleItem key={elt.id} student={elt} />
      ))}
    </div>
  );
}

export default List;
