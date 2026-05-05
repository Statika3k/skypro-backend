const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books")
const logger = require("./middlewares/logger");


dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://localhost",
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);


app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, World!");
});

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.use(userRouter);
app.use(bookRouter);
app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
