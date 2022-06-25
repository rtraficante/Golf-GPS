const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../assets")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.sendStatus(err.status || 500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
