require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");
const cloudinary = require("./config/cloudinary");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
cloudinary();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("A MERN stack ecommerce app");
});

db(app);
