import caclculeExercue
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/exercises", (req, res) => {
  const exercises = req.body;
  const result = calculateExercises();
  res.json(result);
});

app.listen(3002, () => {
  console.log("Express server is running on http://localhost:3002");
});
