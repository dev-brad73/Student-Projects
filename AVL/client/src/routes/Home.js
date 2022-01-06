import React, { useState } from "react";
import { useNavigate } from "react-router";
import DataSearch from "../apis/DataSearch";
// import Table from "react-bootstrap/Table";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [user_email, setUser_email] = useState("");

  let navigate = useNavigate();

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    if (fname === "" || lname === "" || user_email === "") {
      alert("Input Fields Cannot Be Empty!!!");
    } else {
      try {
        const response = await DataSearch.post("/addUserInfo", {
          fname,
          lname,
          user_email,
        });
        console.log(response.data.data.users.user_id);

        const handleUpdate = (id) => {
          navigate(`/${id}/Search`);
        };
        handleUpdate(response.data.data.users.user_id);
      } catch (err) {}
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (user_email === "") {
      alert("Input Field Cannot Be Empty!!!");
    } else {
      try {
        const response = await DataSearch.get(`/user/email/${user_email}`);
        console.log(response.data.data.users.user_id);

        const handleUpdate = (id) => {
          navigate(`/${id}/Search`);
        };
        handleUpdate(response.data.data.users.user_id);
      } catch (err) {}
    }
  };

  return (
    <div>
      <header className="App-header-2">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center">Welcome to the Binary Search Tree</h1>
        <br />
        <br />
        <br />
        <br />
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label" htmlFor="user_name">
                Please Enter Your Info:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setFname(e.target.value)}
                className="text_input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter First Name"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setLname(e.target.value)}
                className="text_input"
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter Last Name"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setUser_email(e.target.value)}
                className="text_input"
                type="text"
                id="user_email"
                name="user_email"
                placeholder="Enter email"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleNameSubmit}
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
        <form className="home-form" action="">
          <ul className="app-ul-1">
            <li className="app-li-1">
              <label className="home_label1" htmlFor="user_email">
                If You Searched Before, Enter Email:
              </label>
            </li>
            <li className="app-li-1">
              <input
                onChange={(e) => setUser_email(e.target.value)}
                className="text_input"
                type="text"
                id="user_email"
                name="user_email"
                placeholder="Enter Email"
                required
              ></input>
            </li>
            <li className="app-li-1">
              <input
                onClick={handleEmailSubmit}
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
    </div>
  );
};

export default Home;
