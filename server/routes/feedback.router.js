const express = require("express");
const { Pool } = require("pg");
const { query } = require("../modules/pool");
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

// POST route request to add feedback
router.post("/", (req, res) => {
  const newFeedback = req.body;
  const queryText = `INSERT INTO prime_feedback (feeling, understanding, support, comments)
                    VALUES($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newFeedback.feelingForm,
      newFeedback.understandingForm,
      newFeedback.supportedForm,
      commentsForm,
    ])
    .then((results) => {
      console.log("In POST /feedback", results);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("POST /feedback error", err);
      res.sendStatus(500);
    });
});

module.exports = router;
