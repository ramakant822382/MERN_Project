const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const app = express();
const cookie = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

const path = require("path");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookie());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// route import
const product = require("./routes/productRoute");
app.use("/api/v1", product);
app.use("/api/v1", userRoute);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware  for error
app.use(errorMiddleware);
app.use(cors());

module.exports = app;
