import React from "react";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h1 className="home_header">
        Welcome to the Book Collection
        <form action="/About">
          {" "}
          <button
            className="btn btn-sm btn-primary py-0"
            style={{ color: "white" }}
            type="submit"
          >
            Click here to continue
          </button>
        </form>
      </h1>
    </div>
  );
};

export default Home;
