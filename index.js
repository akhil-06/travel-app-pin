const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const userRoute = require("./routes/users");
// const pinRoute = require("./routes/pins");

dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));


app.listen(8800, () => {
    console.log("Backend server is running!");
  });