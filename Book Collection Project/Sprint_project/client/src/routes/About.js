import React from "react";
import Table from "react-bootstrap/Table";
import "./App.css";

const About = () => {
  return (
    <div>
      <h3 className="home_header-2">
        Software Development Semester 3 Sprint Project <br />
        <br />
        <div className=".container-sm">
          <h5 className="about-table">
            <Table className="table ">
              <tbody className="about-table">
                <tr className="about-table">
                  <td className="about-table1"> Project Type:</td>
                  <td className="about-table2">PERN</td>
                </tr>
                <tr className="about-table">
                  <td className="about-table1"> Project Version:</td>
                  <td className="about-table2">v1.0</td>
                </tr>
                <tr className="about-table">
                  <td className="about-table1"> Project Date:</td>
                  <td className="about-table2">November 21, 2021</td>
                </tr>
                <tr className="about-table">
                  <td className="about-table1"> Project Author:</td>
                  <td className="about-table2">Brad Rice</td>
                </tr>
              </tbody>
            </Table>
            <br />
          </h5>
        </div>
        <form action="/Search">
          {" "}
          <button
            className="btn btn-sm btn-primary py-0"
            style={{ color: "white" }}
            type="submit"
          >
            Click here to continue
          </button>
        </form>
      </h3>
    </div>
  );
};

export default About;
