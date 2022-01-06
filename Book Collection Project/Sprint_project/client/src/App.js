import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Search from "./routes/Search";
import Add from "./routes/Add";
import Results from "./routes/Results";
import Update from "./routes/Update";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink as Link,
} from "react-router-dom";
import { BooksContextProvider } from "./context/BooksContext";

const App = () => {
  return (
    <BooksContextProvider>
      <Router>
        <div className="container-lg navbar1">
          <header className="App-header-1 ">
            <ul className="app-ul nav navbar-nav">
              <li className="app-li link-wrapper">
                <Link
                  to="/"
                  className={({ isActive }) =>
                    "normalNav " + (isActive ? "activeNav" : "")
                  }
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  Home
                </Link>
              </li>
              <li className="app-li link-wrapper">
                <Link
                  to="/About"
                  className={({ isActive }) =>
                    "normalNav " + (isActive ? "activeNav" : "")
                  }
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  About
                </Link>
              </li>
              <li className="app-li link-wrapper">
                <Link
                  to="/Search"
                  className={({ isActive }) =>
                    "normalNav " + (isActive ? "activeNav" : "")
                  }
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  Search
                </Link>
              </li>
              <li className="app-li link-wrapper">
                <Link
                  to="/Add"
                  className={({ isActive }) =>
                    "normalNav " + (isActive ? "activeNav" : "")
                  }
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  Add Book
                </Link>
              </li>
              <li className="app-li link-wrapper">
                <Link
                  to="/Results"
                  className={({ isActive }) =>
                    "normalNav " + (isActive ? "activeNav" : "")
                  }
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  List All Books
                </Link>
              </li>
            </ul>
          </header>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Search" exact element={<Search />} />
            <Route path="/Add" exact element={<Add />} />
            <Route path="/Results" exact element={<Results />} />
            <Route path="/books/:id/update" exact element={<Update />} />
          </Routes>
        </div>
      </Router>
    </BooksContextProvider>
  );
};

export default App;
