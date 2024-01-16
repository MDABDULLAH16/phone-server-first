const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello phone server");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);

  console.log("id is here", id);
});

app.listen(port, () => {
  console.log(`phone server is running ${port}`);
});
