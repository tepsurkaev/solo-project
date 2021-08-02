require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

const connectAndStartServer = async () => {
  const { PORT, dataBase } = process.env;
  try {
    await mongoose.connect(dataBase, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => {
      console.log(`Connecting to server... Port ${PORT}`);
    });
  } catch (e) {
    console.log(`Connecting error: ${e.toString()}`);
  }
};

connectAndStartServer();
