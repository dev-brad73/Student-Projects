import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BooksContext } from "../context/BooksContext";
import BookSearch from "../apis/BookSearch";
import Table from "react-bootstrap/Table";
import "./App.css";

const Search = (props) => {
  const [book_title, setBook_title] = useState("");
  const [book_rarity, setBook_rarity] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [book_genre, setBook_Genre] = useState("");
  const [book_ISBN, setBook_ISBN] = useState("");

  const { books, setBooks } = useContext(BooksContext);
  let navigate = useNavigate();

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

  const handleAuthorSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseAuthor = await BookSearch.get(`/author/${author_name}`);
      setBooks(responseAuthor.data.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseTitle = await BookSearch.get(`/title/${book_title}`);
      setBooks(responseTitle.data.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRaritySubmit = async (e) => {
    e.preventDefault();
    try {
      const responseRarity = await BookSearch.get(`/rarity/${book_rarity}`);
      setBooks(responseRarity.data.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGenreSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseGenre = await BookSearch.get(`/genre/${book_genre}`);
      setBooks(responseGenre.data.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const handleIsbnSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseIsbn = await BookSearch.get(`/ISBN/${book_ISBN}`);
      setBooks(responseIsbn.data.data.books);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(books);

  return (
    <div>
      <header className="App-header-2">
        <h5 className="text-center">Search Books</h5>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="author_name">
                Search By Author Name:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setAuthor_name(e.target.value)}
                className="text_input"
                type="text"
                id="author_name"
                name="author_name"
                placeholder="Enter Author Name"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleAuthorSubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="fname">
                Search By Book Title:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setBook_title(e.target.value)}
                className="text_input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Book Title"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleTitleSubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="fname">
                Search By Book ISBN:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setBook_ISBN(e.target.value)}
                className="text_input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Book ISBN"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleIsbnSubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="fname">
                Search By Book Genre:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setBook_Genre(e.target.value)}
                className="text_input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Book Genre"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleGenreSubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_rarity">
                Search By Book Rarity:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setBook_rarity(e.target.value)}
                className="text_input"
                type="text"
                id="book_rarity"
                name="book_rarity"
                placeholder="Enter Book Rarity"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleRaritySubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-outline-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "white" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
      </header>
      <h5 className="text-center App-header-5">Search Results</h5>
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
    </div>
  );
};

export default Search;
