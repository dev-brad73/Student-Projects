require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data_service = require("./data-service");
const bodyParser = require("body-parser");
var path = require("path");
const app = express();

// Checking the .env file for port selection and if none given will listen on port 8080 as default
var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart(error) {
  if (HTTP_PORT === undefined) {
    console.log(
      `Unable to start server. HTTP_PORT is ${error}. Please check port settings!!!`
    );
  } else {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
}

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Start of CRUD commands:

// All POST commands("C"-create in CRUD)
// POST to user_data:

app.post("/api/v1/tree/addUserData", function (req, res) {
  data_service.addUserData(req, res).catch((err) => {
    res.send(err);
  });
});

// POST to user_info:
app.post("/api/v1/tree/addUserInfo", function (req, res) {
  data_service.addUserInfo(req, res).catch((err) => {
    res.send(err);
  });
});
//

// All GET commands("R"-retrieve in CRUD):
// GET Books:

app.get("/api/v1/tree/data/:id", function (req, res) {
  data_service.getUserDataById(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/tree/userdata/:id", function (req, res) {
  data_service.getUserDataByDataId(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/tree/user/:id", function (req, res) {
  data_service.getUserInfoById(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/tree/user/email/:user_email", function (req, res) {
  data_service.getUserInfoByEmail(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/tree/data", function (req, res) {
  data_service.getAllUserData(req, res).catch((err) => {
    res.send(err);
  });
});

app.listen(HTTP_PORT, onHttpStart);
