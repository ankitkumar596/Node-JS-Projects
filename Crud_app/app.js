const express = require("express");
const bcrypt = require("bcryptjs");
const  mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// require routers
const alienRouter = require("./routes/alien");

// mongo db connection
mongoose
  .connect(
    "mongodb+srv://CrudApp:CrudApp1234@crudapp.nlzlwbr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch(() => {
    console.log("errror occured in database connection");
  });

// middleware use
app.use(express.json());
app.use(bodyParser.json());
app.use("/aliean", alienRouter);

//server connection
const port = 9000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
