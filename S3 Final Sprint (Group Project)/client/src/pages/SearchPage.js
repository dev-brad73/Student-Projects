import Topbar from "../components/Topbar";
import { useRef, useState } from "react";

import SearchResults from "../components/SearchResults";

const SearchPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [searchResults, setSearchResults] = useState(false);
  const searchRef = useRef();
  const databaseRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const databaseValue = databaseRef.current.value;

    const searchData = {
      searchString: searchValue,
      databaseValue: databaseValue,
      userId: user._id,
    };

    const searchResultsJSON = await fetch("customers/", {
      method: "POST",
      body: JSON.stringify(searchData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });

    setSearchResults(searchResultsJSON);
  };

  return (
    <div>
      <Topbar />
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search database"
          ref={searchRef}
        ></input>
        <select name="dropdown" id="database" ref={databaseRef}>
          <option value="mongoDB">mongoDB</option>
          <option value="postgres">postgres</option>
          <option value="both">both</option>
        </select>
        <button className="submit">Search</button>
      </form>
      {searchResults ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        "nodata"
      )}
    </div>
  );
};

export default SearchPage;
