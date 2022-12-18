const mongoose = require("mongoose");

const { Schema } = mongoose;

const alienSchema = new Schema({
  name: {
    type: "String",
    require: true,
  },
  tech: {
    type: "String",
    require: true,
  },
  sub: {
    type: "String",
    require: true,
  },
});

module.exports = mongoose.model("User", alienSchema);
