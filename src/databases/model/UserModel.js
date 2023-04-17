const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
   type: String,
   minLength: 5,
  }
})
const Usermodel = mongoose.model("User", userSchema)

module.exports = Usermodel;