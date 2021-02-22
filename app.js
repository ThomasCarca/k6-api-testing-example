const express = require("express");
const app = express();
const port = 3000;

app.get("/slow", (req, res) =>
  setTimeout(() => handleResponse(res), getRandomBetween(50, 250))
);

app.get("/fast", (req, res) =>
  setTimeout(() => handleResponse(res), getRandomBetween(20, 50))
);

const handleResponse = (res) => isRessourceFound() ? res.status(200).send() : res.status(404).send();

const isRessourceFound = () => Math.random() <= 0.9;

const getRandomBetween = (min, max) =>
  min + Math.floor(Math.random() * Math.floor(max));

app.listen(port);
