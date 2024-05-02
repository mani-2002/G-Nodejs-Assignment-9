const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

const bodyparser = require("body-parser");

require("express-async-errors");
const database = require("./database");
const bookRoutes = require("./controller/controllerBook.js");

app.use(bodyparser.json());
app.use("/books", bookRoutes);

database
  .query("select 1")
  .then(() => {
    console.log("Connecting to Database successful");
    app.listen(8080, () => console.log("server started at 8080 "));
  })
  .catch((err) => console.log("Connecting to Database failed \n" + err));
