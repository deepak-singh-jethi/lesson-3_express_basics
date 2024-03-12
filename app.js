// const http = require("http");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const rootDir = require("./helper/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//catch routes error if no page with given route is found then show this page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "noPageFound.html"));
});

app.listen(3000);
