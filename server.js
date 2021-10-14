require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cloudinary = require("./config/cloudinary");
// const productRouter = require("./routers/productRouter");
// const userRouter = require("./routers/userRouter");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
cloudinary();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// app.use("/user", userRouter);
// app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("A MERN stack ecommerce app");
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening at : ${port}`);
    });
  })
  .catch(() => {
    console.log("Server error occurred");
  });
