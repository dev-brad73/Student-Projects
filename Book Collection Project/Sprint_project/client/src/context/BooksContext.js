import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const addBooks = (book) => {
    setBooks([...books, book]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, addBooks }}>
      {props.children}
    </BooksContext.Provider>
  );
};
