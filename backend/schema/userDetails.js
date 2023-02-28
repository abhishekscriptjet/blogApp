const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  user: {
    type: Object,
    require: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userid",
  },
  userDetailsDate:{
    type: Date,
    default: new Date(),
  }
});

const UserDetails = mongoose.model("userDetails", userDetailsSchema);

module.exports = UserDetails;
