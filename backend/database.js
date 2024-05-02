const mysql = require("mysql2/promise");

const mysqlDetails = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookStore",
});

module.exports = mysqlDetails;
