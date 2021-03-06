const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/Jiet", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
  });

app.use(userRoute);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});