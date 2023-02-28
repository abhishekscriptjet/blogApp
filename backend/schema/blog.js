const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userid",
  },
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  comment: [
    {
      user: {
        type: String,
      },
      text: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
  ],
  date: {
    type: Date,
    default: new Date(),
  },
  upVote: {
    type: Number,
  },
  downVote: {
    type: Number,
  },
});

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
