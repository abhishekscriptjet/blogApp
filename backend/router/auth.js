const express = require("express");
const User = require("../schema/user");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("./fetchUser");
const signature = "TADA";

router.post(
  "/register",
  [
    body("name").isString(),
    body("email").isEmail(),
    body("password", "Password should have only 5 or more characters").isLength(
      { min: 5 }
    ),
    body("phone", "Phone number should have only 10 characters").isLength({
      min: 10,
      max: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password, phone } = req.body;
      const salt = await bcrypt.genSalt(10);
      const dbUser = await User.findOne({ email: email });
      const hashPassword = await bcrypt.hash(password, salt);
      const dbUserPhone = await User.findOne({ phone: phone });
      if (!dbUser) {
        if (!dbUserPhone) {
          await User.create({
            name: name,
            email: email,
            password: hashPassword,
            phone: phone,
          }).then(res.status(200).json({ success: true }));
        } else {
          res
            .status(400)
            .json({ success: false, error: "Phone number already verified" });
        }
      } else {
        res.status(400).json({ success: false, error: "User alredy exist" });
      }
    } catch (error) {
      res.status(400).json({ success: false});
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "Password should have only 5 or more characters").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),error:"Set valid data" });
    }
    try {
      const { email, password } = req.body;
      const dbUser = await User.findOne({ email: email });
      const comparePassword = await bcrypt.compare(password, dbUser.password);

      if (dbUser.email === email && comparePassword) {
        const body = {
          id: dbUser._id,
        };
        const token = jwt.sign(body, signature);
        res.status(200).json({ success: true, token: token });
      } else {
        res
          .status(400)
          .json({ success: false });
      }
    } catch (error) {
      res
        .status(400)
        .json({ success: false });
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userId = req.userid;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(400).json({ error: "Internal server error" });
  }
});

module.exports = router;
