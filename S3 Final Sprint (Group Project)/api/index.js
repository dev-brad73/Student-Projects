// Require libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Create app
const app = express();

// PORT
const PORT = 5000;

// Get dotenv cofig
dotenv.config();

// Use middleware
app.use(bodyParser.json());
app.use(express.json());

// Add routes
const customerRoute = require("./routes/customers");
const userRoute = require("./routes/users");

// Use routes
app.use("/api/customers", customerRoute);
app.use("/api/users", userRoute);

// Connect to mongoose
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

// Homepage route
app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Customers API");
});

// Start app
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
