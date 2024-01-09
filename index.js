const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// To protect from CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.use("/", userRoutes);

// setting mongoose connection and starting server
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log("Server up and running on PORT:", process.env.APP_PORT);
    });
  })

  .catch((err) => {
    console.log(err);
  });
