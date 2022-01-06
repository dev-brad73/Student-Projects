import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import BookSearch from "../apis/BookSearch";
import { BooksContext } from "../context/BooksContext";
import Table from "react-bootstrap/Table";
import "./App.css";

const Update = (props) => {
  const { id } = useParams();
  const { books, setBooks } = useContext(BooksContext);

  let navigate = useNavigate();

  const [book_id, setBook_Id] = useState("");
  const [owner_id, setOwner_id] = useState("");
  const [book_title, setBook_title] = useState("");
  const [edition_num, setEdition_num] = useState("");
  const [author_id, setAuthor_id] = useState("");
  const [publisher_id, setPublisher_id] = useState("");
  const [book_genre, setBook_genre] = useState("");
  const [book_ISBN, setBook_ISBN] = useState("");
  const [serial_num, setSerial_num] = useState("");
  const [book_condition, setBook_condition] = useState("");
  const [book_rarity, setBook_rarity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await BookSearch.get(`/${id}`);

      setBook_Id(response.data.data.books.book_id);
      setOwner_id(response.data.data.books.owner_id);
      setBook_title(response.data.data.books.book_title);
      setEdition_num(response.data.data.books.edition_num);
      setAuthor_id(response.data.data.books.author_id);
      setPublisher_id(response.data.data.books.publisher_id);
      setBook_genre(response.data.data.books.book_genre);
      setBook_ISBN(response.data.data.books.book_ISBN);
      setSerial_num(response.data.data.books.serial_num);
      setBook_condition(response.data.data.books.book_condition);
      setBook_rarity(response.data.data.books.book_rarity);
      const responseTitle = await BookSearch.get(
        `/title/${response.data.data.books.book_title}`
      );
      setBooks(responseTitle.data.data.books);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = await BookSearch.put(`/update/${id}`, {
      book_id,
      owner_id,
      book_title,
      edition_num,
      author_id,
      publisher_id,
      book_genre,
      book_ISBN,
      serial_num,
      book_condition,
      book_rarity,
    });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    try {
      const response = await BookSearch.delete(`/deleteBook/${id}`);
      setBooks(
        books.filter((book) => {
          // console.log(book.book_id);
          // console.log(id);
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
      <header className="App-header-4">
        <h5 className="text-center App-header-5">Update Book</h5>
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_id">
                Book ID:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_id}
                onChange={(e) => setBook_Id(e.target.value)}
                className="text_input"
                type="number"
                id="book_id"
                name="book_id"
                placeholder="Book ID 1-50"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="author_id">
                Owner ID:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={owner_id}
                onChange={(e) => setOwner_id(e.target.value)}
                className="text_input"
                type="number"
                id="author_id"
                name="author_id"
                placeholder="Owner ID 1-50"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_title">
                Book Title:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_title}
                onChange={(e) => setBook_title(e.target.value)}
                className="text_input"
                type="text"
                id="book_title"
                name="book_title"
                placeholder="Book Title"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="edition_num">
                Edition Number:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={edition_num}
                onChange={(e) => setEdition_num(e.target.value)}
                className="text_input"
                type="number"
                id="edition_num"
                name="edition_num"
                placeholder="Edition Number"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="author_id">
                Author ID:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={author_id}
                onChange={(e) => setAuthor_id(e.target.value)}
                className="text_input"
                type="number"
                id="author_id"
                name="author_id"
                placeholder="Author ID 1-50"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="publisher_id">
                Publisher ID:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={publisher_id}
                onChange={(e) => setPublisher_id(e.target.value)}
                className="text_input"
                type="number"
                id="publisher_id"
                name="publisher_id"
                placeholder="Publisher ID 1-50"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_genre">
                Book Genre:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_genre}
                onChange={(e) => setBook_genre(e.target.value)}
                className="text_input"
                type="text"
                id="book_genre"
                name="book_genre"
                placeholder="Book Genre"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_ISBN">
                ISBN:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_ISBN}
                onChange={(e) => setBook_ISBN(e.target.value)}
                className="text_input"
                type="text"
                id="book_ISBN"
                name="book_ISBN"
                placeholder="ISBN xxx-x-xx-xxxxxx-x "
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="serial_num">
                Serial Number:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={serial_num}
                onChange={(e) => setSerial_num(e.target.value)}
                className="text_input"
                type="number"
                id="serial_num"
                name="serial_num"
                placeholder="Serial Number"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_condition">
                Book Condition:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_condition}
                onChange={(e) => setBook_condition(e.target.value)}
                className="text_input"
                type="text"
                id="book_condition"
                name="book_condition"
                placeholder="Book Condition"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-1">
              <label className="home_label" htmlFor="book_rarity">
                Book Rarity:
              </label>
            </li>
            <li className="app-li-1">
              <input
                value={book_rarity}
                onChange={(e) => setBook_rarity(e.target.value)}
                className="text_input"
                type="text"
                id="book_rarity"
                name="book_rarity"
                placeholder="Book Rarity"
              ></input>
            </li>
            <br />
            <br />
            <li className="app-li-2">
              <input
                onClick={handleSubmit}
                className="btn btn-sm btn-outline-primary py-0"
                style={{ color: "white" }}
                type="submit"
                value="submit"
              />
            </li>
          </ul>
        </form>
      </header>
      <h5 className="text-center App-header-5">Updated Results</h5>
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

export default Update;
