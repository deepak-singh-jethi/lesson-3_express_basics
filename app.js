const http = require("http");
const express = require("express");
const { log } = require("console");

const app = express();

app.use((req, res, next) => {
  console.log("Inside the middleWare");
  next(); // Allows the request to continue to the next middleware in line.
});

app.use((req, res, next) => {
  console.log("inside another middleware");
  res.send("<h1>Hello from Express</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
