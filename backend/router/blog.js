const express = require("express");
const blog = require("../schema/blog");
const { body, validationResult } = require("express-validator");
const fetchuser = require("./fetchUser");
const User = require("../schema/user");
const router = express.Router();

router.post(
  "/createblog",
  fetchuser,
  [body("topic").isString(), body("userid"), body("description").isString()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const userId = await req.userid;
      const user = await User.findById(userId).select("-password");
      const { topic, description, comment, upVote, downVote, src } = req.body;
      if (user) {
        const blogs = new blog({
          userid: userId,
          topic: topic,
          description: description,
          src: src,
          comment: comment,
          upVote: upVote,
          downVote: downVote,
        });
        const creatBlog = await blogs.save();
        await res.status(200).json({ success: true, creatBlog: creatBlog });
      } else {
        res
          .status(400)
          .json({ success: false, error: "Not allowed to create blog" });
      }
    } catch (error) {
      res.status(400).json({ success: false, error: "Internal server error" });
    }
  }
);

router.get("/getblog", fetchuser, async (req, res) => {
  try {
    const getblog = await blog.find({ userid: req.userid });
    const user = await User.findById(req.userid).select("-password");
    res.status(200).json({ success: true, getblog, user,msg:"Loaded" });
  } catch (error) {
    res.status(400).json({ success: false, error:"Internel server error" });
  }
});

router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
  try {
    const getblog = await blog.findById(req.params.id);
    if (!getblog) {
      return res.status(400).json({ success: false, error: "Not Found" });
    }
    if (getblog.userid.toString() !== req.userid) {
      return res.status(400).json({ success: false, error: "Not Allowed" });
    }
    const deleteblog = await blog.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: true, deleteblog: deleteblog });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Internal server error" });
  }
});

router.put(
  "/editblog/:id",
  fetchuser,
  [body("topic").isString(), body("userid"), body("description").isString()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { topic, description, comment, upVote, downVote, src } = req.body;
      const userId = await req.userid;
      const updatedBlog = {
        userid: userId,
        topic: topic,
        description: description,
        src: src,
        comment: comment,
        upVote: upVote,
        downVote: downVote,
      };
      let getblog = await blog.findById(req.params.id);
      if (!getblog) {
        return res.status(400).json({ success: false, error: "Not Found" });
      }
      if (getblog.userid.toString() !== userId) {
        return res.status(400).json({ success: false, error: "Not Allowed" });
      }
      getblog = await blog.findByIdAndUpdate(
        req.params.id,
        { $set: updatedBlog },
        { new: true }
      );
      res.status(200).json({ success: true, getblog: getblog });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, error: "Internal server error" });
    }
  }
);

module.exports = router;
