import React, { useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import BookSearch from "../apis/BookSearch";
import { BooksContext } from "../context/BooksContext";
import "./App.css";
// import { useHistory } from "react-router-dom";

const Results = (props) => {
  const { books, setBooks } = useContext(BooksContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookSearch.get("/");
        setBooks(response.data.data.books);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await BookSearch.delete(`/deleteBook/${id}`);
      setBooks(
        books.filter((book) => {
          return book.book_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/books/${id}/update`);
  };

  return (
    <div>
      <header className="App-header-2">
        <h5 className="text-center App-header-5">All Book Results</h5>
        <Table className="table table-hover results-table">
          <thead className="results-table-head">
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Genre</th>
              <th>ISBN</th>
              <th>Serial#</th>
              <th>Publisher</th>
              <th>Condition</th>
              <th>Rarity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* If data successfully retrieved, then render the data and run rest of code. 
          If no data retrieved, rest of code will not run */}
            {books &&
              books.map((book) => {
                return (
                  <tr key={book.book_id} className="results-row">
                    <td>{book.book_id}</td>
                    <td>{book.full_name}</td>
                    <td>{book.book_title}</td>
                    <td>{book.owner_full_name}</td>
                    <td>{book.book_genre}</td>
                    <td>{book.book_ISBN}</td>
                    <td>{book.serial_num}</td>
                    <td>{book.publisher_name}</td>
                    <td>{book.book_condition}</td>
                    <td>{book.book_rarity}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(book.book_id)}
                        className="btn btn-warning update-button"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(book.book_id)}
                        className="btn btn-danger delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </header>
    </div>
  );
};

export default Results;
