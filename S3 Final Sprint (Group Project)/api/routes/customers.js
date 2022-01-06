const router = require("express").Router();
const Customer = require("../models/Customer");
const User = require("../models/User");

const Pool = require("pg").Pool;
const pool = new Pool();

// Search for customer data
router.post("/", async (req, res) => {
  const searchStringValue = req.body.searchString;
  const databaseValue = req.body.databaseValue;
  const userId = req.body.userId;
  const timestamp = Date.now();

  console.log(databaseValue);
  console.log(userId);

  const searchStringArray = searchStringValue.split(" ");
  const regex = [];
  for (var i = 0; i < searchStringArray.length; i++) {
    regex[i] = new RegExp(searchStringArray[i]);
  }
  console.log(regex);

  const searchData = [];

  // Search mongoDB customers database
  if (databaseValue === "mongoDB") {
    try {
      if (searchStringArray) {
        // Search by first_name
        const firstNameData = await Customer.find({
          first_name: { $in: regex },
        });
        if (firstNameData.length > 0) {
          firstNameData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by last_name
        const lastNameData = await Customer.find({
          last_name: { $in: regex },
        });
        if (lastNameData.length > 0) {
          lastNameData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by email
        const emailData = await Customer.find({
          email: { $in: regex },
        });
        if (emailData.length > 0) {
          emailData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by email
        const phoneNumberData = await Customer.find({
          phone_number: { $in: regex },
        });
        if (phoneNumberData.length > 0) {
          phoneNumberData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by city
        const cityData = await Customer.find({
          city: { $in: regex },
        });
        if (cityData.length > 0) {
          cityData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by country
        const countryData = await Customer.find({
          country: { $in: regex },
        });
        if (countryData.length > 0) {
          countryData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }
      }

      const uniqueSearchData = [
        ...new Map(
          searchData.map((item) => [item["customer_id"], item])
        ).values(),
      ];

      // Add search data to user's search data array
      await User.findByIdAndUpdate(req.body.userId, {
        $push: { searches: { searchStringValue, uniqueSearchData, timestamp } },
      });

      res.json(uniqueSearchData);
    } catch (error) {
      res.status(500).data.json(error);
    }
  }

  if (databaseValue === "postgres") {
    try {
      new Promise(async (resolve, reject) => {
        let search_params = req.body.searchString
          .split(" ")
          .map((i) => "'" + "%" + i + "%" + "'");
        console.log(req.body);
        console.log(req.body.searchString);
        console.log(search_params.join(", "));

        var SQL = `SELECT * \
        FROM "customers" \
        WHERE (customer_id \
            , first_name \
            , last_name \
            , email \
            , phone_number \
            , city \
            , country \
            , account_balance)::text \
        ILIKE ANY (ARRAY[${search_params.join(", ")}])`;

        pool.query(SQL, async (error, results) => {
          if (error) {
            throw error;
          }

          results.rows.forEach((result) => {
            console.log(result);
            searchData.push(result);
          });

          const uniqueSearchData = [
            ...new Map(
              searchData.map((item) => [item["customer_id"], item])
            ).values(),
          ];

          // Add search data to user's search data array
          await User.findByIdAndUpdate(req.body.userId, {
            $push: {
              searches: { searchStringValue, uniqueSearchData, timestamp },
            },
          });

          res.json(uniqueSearchData);
        });
        resolve();
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // Search mongoDB customers database
  if (databaseValue === "both") {
    try {
      if (searchStringArray) {
        // Search by first_name
        const firstNameData = await Customer.find({
          first_name: { $in: regex },
        });
        if (firstNameData.length > 0) {
          firstNameData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by last_name
        const lastNameData = await Customer.find({
          last_name: { $in: regex },
        });
        if (lastNameData.length > 0) {
          lastNameData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by email
        const emailData = await Customer.find({
          email: { $in: regex },
        });
        if (emailData.length > 0) {
          emailData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by email
        const phoneNumberData = await Customer.find({
          phone_number: { $in: regex },
        });
        if (phoneNumberData.length > 0) {
          phoneNumberData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by city
        const cityData = await Customer.find({
          city: { $in: regex },
        });
        if (cityData.length > 0) {
          cityData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }

        // Search by country
        const countryData = await Customer.find({
          country: { $in: regex },
        });
        if (countryData.length > 0) {
          countryData.forEach((searchResult) => {
            searchData.push(searchResult);
          });
        }
      }
    } catch (error) {
      res.status(500).data.json(error);
    }

    try {
      new Promise(async (resolve, reject) => {
        let search_params = req.body.searchString
          .split(" ")
          .map((i) => "'" + "%" + i + "%" + "'");
        console.log(req.body);
        console.log(req.body.searchString);
        console.log(search_params.join(", "));

        var SQL = `SELECT * \
        FROM "customers" \
        WHERE (customer_id \
            , first_name \
            , last_name \
            , email \
            , phone_number \
            , city \
            , country \
            , account_balance)::text \
        ILIKE ANY (ARRAY[${search_params.join(", ")}])`;

        pool.query(SQL, async (error, results) => {
          if (error) {
            throw error;
          }

          results.rows.forEach((result) => {
            console.log(result);
            searchData.push(result);
          });

          const uniqueSearchData = [
            ...new Map(
              searchData.map((item) => [item["customer_id"], item])
            ).values(),
          ];

          // Add search data to user's search data array
          await User.findByIdAndUpdate(req.body.userId, {
            $push: {
              searches: { searchStringValue, uniqueSearchData, timestamp },
            },
          });
          res.status(200).json(uniqueSearchData);
        });
        resolve();
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

module.exports = router;
