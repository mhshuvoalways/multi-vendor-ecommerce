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
const inWishListRouter = require("./routers/inWishListRouter");
const userAddressRouter = require("./routers/userAddressRouter");
const orderRouter = require("./routers/orderRouter");
const reviewRouter = require("./routers/reviewRouter");
const paymentRoute = require("./routers/paymentRoute");
const vendorRoutes = require("./routers/vendorRoutes");
const contactRoute = require("./routers/contactRoute");

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
app.use("/wishlist", inWishListRouter);
app.use("/address", userAddressRouter);
app.use("/order", orderRouter);
app.use("/review", reviewRouter);
app.use("/payment", paymentRoute);
app.use("/vendor", vendorRoutes);
app.use("/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("A MERN stack ecommerce app");
});

db(app);
