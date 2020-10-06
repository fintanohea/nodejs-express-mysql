const serverless = require('serverless-http');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// enable cors
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fintanohea application." });
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/email-list.routes.js")(app);

// // set port, listen for requests
// app.listen(3000, () => {
//   console.log("Server is running on port 3000.");
// });

module.exports.handler = serverless(app);
