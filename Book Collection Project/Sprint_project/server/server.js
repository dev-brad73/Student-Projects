require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const data_service = require("./data-service");
const bodyParser = require("body-parser");
const fs = require("fs");
var path = require("path");
const { resourceLimits } = require("worker_threads");
const app = express();

// Checking the .env file for port selection and if none given will listen on port 8080 as default
var HTTP_PORT = process.env.PORT || 8080;

const storage = multer.diskStorage({
  destination: "./public/images/uploaded",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

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
// POST to Books:

app.post("/api/v1/books/addBook", function (req, res) {
  data_service.addBook(req, res).catch((err) => {
    res.send(err);
  });
});
//

// All GET commands("R"-retrieve in CRUD):
// GET Books:

app.get("/api/v1/books/:id", function (req, res) {
  data_service.getBooksById(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/", function (req, res) {
  data_service.getAllBooks(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/rarity/:book_rarity", function (req, res) {
  data_service.getBookByRarity(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/title/:book_title", function (req, res) {
  data_service.getBookByTitle(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/ISBN/:book_ISBN", function (req, res) {
  data_service.getBookByISBN(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/genre/:book_genre", function (req, res) {
  data_service.getBookByGenre(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("/api/v1/books/author/:full_name", function (req, res) {
  data_service.getBookByAuthor(req, res).catch((err) => {
    res.send(err);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "views/404_error.html"));
});

// All PUT commands("U"-update in CRUD):
// Update a Book:

app.put("/api/v1/books/update/:id", function (req, res) {
  data_service.updateBook(req, res).catch((err) => {
    res.send(err);
  });
});

// All DELETE commands("D"-delete in CRUD):
// Delete a Book:

app.delete("/api/v1/books/deleteBook/:id", function (req, res) {
  data_service.deleteBook(req, res).catch((err) => {
    res.send(err);
  });
});

// Delete ALL Books:

app.listen(HTTP_PORT, onHttpStart);
