const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  console.log("asdasd");
  axios
    .get(req.query.url)
    .then((ress) => {
      console.log(`statusCode: ${ress.status}`);
      console.log(ress);
      res.send(ress.data).status(res.status);
    })
    .catch((error) => {
      console.error(error);
      res.send(error).status(500);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
