import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import DataSearch from "../apis/DataSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
var treeify = require("treeify");

const Results = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [user_tree_output, setUser_tree_output] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DataSearch.get(`/userdata/${id}`);
        let item = response.data.data.users[0].user_tree_output;
        setUser_tree_output(item);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-primary py-0"
        style={{ fontSize: 0.8 + "em", color: "yellow" }}
        type="button"
      >
        Go Back
      </button>
      <header className="App-header-2">
        <br />
        <br />
        <br />
        <h2 className="text-center App-header-5">
          Welcome To Your Binary Search Tree
        </h2>
        <br />
        <br />
        <div className="tree" role={"presentation"}>
          <pre>{JSON.stringify(user_tree_output, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
};

export default Results;
