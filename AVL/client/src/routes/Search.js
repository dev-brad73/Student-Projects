import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import DataSearch from "../apis/DataSearch";
import Table from "react-bootstrap/Table";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState([]);

  const handleInputSubmit = async () => {
    if (input === "") {
      alert("Input Fields Cannot Be Empty!!!");
    } else {
      try {
        const response = await DataSearch.post("/addUserData", {
          user_id: id,
          input,
        });
        console.log(response);
      } catch (err) {}
    }
  };

  const handleSelect = (userdata_id) => {
    navigate(`/${userdata_id}/results`);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await DataSearch.get(`/user/${id}`);
        setFname(response.data.data.users.user_fname);
        setLname(response.data.data.users.user_lname);
      } catch (err) {}
    };
    const fetchData = async () => {
      try {
        const response = await DataSearch.get(`/data/${id}`);
        setUsers(response.data.data.users);
      } catch (err) {}
    };
    fetchInfo();
    fetchData();
  }, []);

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="btn btn-sm btn-primary py-0"
        style={{ fontSize: 0.8 + "em", color: "yellow" }}
        type="button"
      >
        Home
      </button>
      <header className="App-header-2">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="text-center App-header-5">
          Welcome {fname} {lname} To Your Searches
        </h2>
        <br />
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="user_search">
                Please Enter Your Numbers:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setInput(e.target.value)}
                className="text_input"
                type="text"
                id="user_search"
                name="user_search"
                placeholder="Input Numbers Separated By a Comma (eg. 1,2,3)"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleInputSubmit}
                className="btn btn-sm btn-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "yellow" }}
                type="submit"
                value="Submit"
              />
            </li>
            <li className="app-li-1">
              <input
                className="btn btn-sm btn-primary py-0"
                style={{ fontSize: 0.8 + "em", color: "yellow" }}
                type="submit"
                value="Clear"
              />
            </li>
            <br></br>
          </ul>
        </form>
      </header>
      <h5 className="text-center App-header-5">
        Results For {fname} {lname}
      </h5>
      <Table className="table table-hover results-table">
        <thead className="results-table-head">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Inputs</th>
            <th>Binary Tree</th>
            <th>Date Created</th>
            <th>See BST</th>
          </tr>
        </thead>
        <tbody>
          {/* If data successfully retrieved, then render the data and run rest of code. 
          If no data retrieved, rest of code will not run */}
          {users &&
            users.map((user) => {
              return (
                <tr key={user.userdata_id} className="results-row">
                  <td>{user.userdata_id}</td>
                  <td>
                    {user.user_fname}
                    {user.user_lname}
                  </td>
                  <td>{user.user_input}</td>
                  <td>{JSON.stringify(user.user_tree_output)}</td>
                  <td>{user.date_added}</td>
                  <td>
                    <button
                      onClick={() => handleSelect(user.userdata_id)}
                      className="btn btn-primary delete-button"
                      style={{ fontSize: 0.8 + "em" }}
                    >
                      Select
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
