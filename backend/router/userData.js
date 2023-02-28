const express = require("express");
const UserDetails = require("../schema/userDetails");
const { body, validationResult } = require("express-validator");
const fetchuser = require("./fetchUser");
const User = require("../schema/user");
const router = express.Router();

router.post(
  "/createuserdetails",
  fetchuser,
  async (req, res) => {
    try {
      const userId = await req.userid;
      const user = await User.findById(userId).select("-password");
      let details = await UserDetails.findOne({userid:userId});
      const { firstName, lastName, gender, dateOfBirth, city, state,country,pincode ,profession,profileImg} = req.body;
      

      const userDetails = ({
        userid: userId,
        user:user,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        dateOfBirth: dateOfBirth,
        city: city,
        state: state,
        country: country,
        pincode: pincode,
        profession: profession,
        profileImg:profileImg
      });
      
      if (user) {
          
          if(details===null){
      
            const userDetails = new UserDetails({
                userid: userId,
                user:user,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                dateOfBirth: dateOfBirth,
                city: city,
                state: state,
                country: country,
                pincode: pincode,
                profession: profession,
                profileImg:profileImg
              });
              const createUserDetails = await userDetails.save();
          res.status(200).json({ success: true, details: createUserDetails, msg:"Details Added" });
        }else if(details.userid.toString() === userId){
            details = await UserDetails.findOneAndUpdate(
                {userid:userId},
                { $set: userDetails },
                { new: true }
              );
              res.status(200).json({ success: true, details: details, msg:"Details Updated" });
        }else{
            res
            .status(400)
            .json({ success: false, error: "Already added Details" });
        }
      } else {
        res
          .status(400)
          .json({ success: false, error: "Not allowed to add Details" });
      }
    } catch (error) {
      res.status(400).json({ success: false, error: "Internal server error" });

    }
  }
);

router.get("/getuserdetails", fetchuser, async (req, res) => {
  try {
    const details = await UserDetails.find({ userid: req.userid });
    res.status(200).json({ success: true, details: details ,msg:"Loaded"});
  } catch (error) {
    res.status(400).json({ success: false, error:"Internel server error" });
  }
});

// router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
//   try {
//     const getblog = await blog.findById(req.params.id);
//     if (!getblog) {
//       return res.status(400).json({ success: false, error: "Not Found" });
//     }
//     if (getblog.userid.toString() !== req.userid) {
//       return res.status(400).json({ success: false, error: "Not Allowed" });
//     }
//     const deleteblog = await blog.findByIdAndRemove(req.params.id);
//     res.status(200).json({ success: true, deleteblog: deleteblog });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ success: false, error: "Internal server error" });
//   }
// });

// router.put(
//   "/editblog/:id",
//   fetchuser,
//   [body("topic").isString(), body("userid"), body("description").isString()],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const { topic, description, comment, upVote, downVote, src } = req.body;
//       const userId = await req.userid;
//       const updatedBlog = {
//         userid: userId,
//         topic: topic,
//         description: description,
//         src: src,
//         comment: comment,
//         upVote: upVote,
//         downVote: downVote,
//       };
//       let getblog = await blog.findById(req.params.id);
//       if (!getblog) {
//         return res.status(400).json({ success: false, error: "Not Found" });
//       }
//       if (getblog.userid.toString() !== userId) {
//         return res.status(400).json({ success: false, error: "Not Allowed" });
//       }
//       getblog = await blog.findByIdAndUpdate(
//         req.params.id,
//         { $set: updatedBlog },
//         { new: true }
//       );
//       res.status(200).json({ success: true, getblog: getblog });
//     } catch (error) {
//       return res
//         .status(400)
//         .json({ success: false, error: "Internal server error" });
//     }
//   }
// );

module.exports = router;
