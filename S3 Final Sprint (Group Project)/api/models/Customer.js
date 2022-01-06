const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customer_id: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  account_balance: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
