const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = require("../modules/pool");

// GET route request
// router.get("/", (req, res) => {
//   // Retrieve db and order by id in descending order
//   // Need for stretch goal only
//   const queryText = `SELECT * FROM prime_feedback ORDER BY id DESC;`;
//   pool
//     .query(queryText)
//     .then((response) => {
//       console.log("GET request to retrieve db", response);
//       res.send(response.rows);
//     })
//     .catch((err) => {
//       console.log("GET request error", err);
//     });
// });

// POST route request to add feedback to db
// after success form submit
router.post("/", (req, res) => {
  const newFeedback = req.body;
  const sqlParams = [
    newFeedback.feelingForm,
    newFeedback.understandingForm,
    newFeedback.supportedForm,
    newFeedback.commentsForm,
  ]
  const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, sqlParams)
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
