import React, { useState } from "react";
import { bookArchive } from "./bookArchive";




export function Viewbooknew(id) {
    const idSelec = parseInt(JSON.stringify(id));
    const selectedBooks = bookArchive.filter((book) => book.id === idSelec);
  

    console.log('id:', idSelec);
  console.log('selectedBooks length:', selectedBooks.length);

    const bookDivs = selectedBooks.map((book) => (
      <div key={book.id}>
        <h3>{book.nombre}</h3>
        <p>{book.pnf}</p>
        <p>{book.id}</p>
      </div>
    ));
  
    return <div>{bookDivs}</div>;
  }

  export default Viewbooknew
