const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db_config");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submissions
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving message");
    } else {
      res.send("Message saved successfully!");
    }
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
