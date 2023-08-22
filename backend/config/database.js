const mongoose = require("mongoose");

const colors = require("colors");

 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL);

    console.log(`Conected mongo db Welcome`.bgGreen);
  } catch (error) {
    console.log(`Error in mongodb ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
