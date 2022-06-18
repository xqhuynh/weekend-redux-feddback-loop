const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET route request
router.get("/", (req, res) => {
  // Retrieve db and order by id in descending order
  const queryText = `SELECT * FROM prime_feedback ORDER BY id DESC;`;
  pool
    .query(queryText)
    .then((response) => {
      console.log("GET request to retrieve db", response);
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("GET request error", err);
    });
});
