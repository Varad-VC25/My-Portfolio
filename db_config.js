const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",     // change this if needed
  password: "VaradSQL@656805",     // your MySQL password
  database: "portfolio_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

module.exports = db;
