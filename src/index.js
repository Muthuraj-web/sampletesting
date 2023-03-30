const express = require("express");
const app = express();
const cors = require("cors");
const testJson = require("./test.json");
require("dotenv").config();
app.use(cors());
app.get("/.well-known/com.apple.remotemanagement", (request, response) => {
  response.status(200);
  response.json(testJson);
});

app.listen(process.env.PORT | 3000, () =>
  console.log(`server is listening at http://localhost:3000}`)
);
