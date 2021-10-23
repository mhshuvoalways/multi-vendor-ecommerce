require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");
const cloudinary = require("./config/cloudinary");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const tagsRouter = require("./routers/tagsRouter");
const inCartRouter = require("./routers/inCartRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
cloudinary();

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/tags", tagsRouter);
app.use("/category", categoryRouter);
app.use("/cart", inCartRouter);

app.get("/", (req, res) => {
  res.send("A MERN stack ecommerce app");
});

db(app);
