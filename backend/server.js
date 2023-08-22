const app = require("./app");
const DB = require("./config/database");
const cloudinary = require("cloudinary");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncaught Exception `.bgCyan);
  process.exit(1);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

var colors = require("colors");

DB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// route

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on http://localhost:${process.env.PORT})`.bgYellow.black
  );
});

// Unhandle error
process.on("unhandledRejection", (err) => {
  // @ts-ignore
  console.log(`Error: ${err.message}`);
  console.log(
    `shuting down server due to unhandale promise rejection`.bgRed.black
  );
  server.close(() => {
    process.exit(1);
  });
});
