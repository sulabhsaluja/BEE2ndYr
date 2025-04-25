const express = require("express");
const router = express.Router();
const User = require("../model/user");


router.post("/", async (req, res) => {
  let { name, email, password } = req.body;
  let newUser = new User({
    name: name,
    email: email,
    password: password,
  });
  await newUser.save(); //will add data into the user collection;
  //Any query to the database is asynchronus.
  res.send("User added successfully");
});
router.get("/", async (req, res) => {
  let allusers = await User.find();
  res.send(allusers);
});
router.get("/:name", async (req, res) => {
  let { name } = req.params;
  let Username = await User.findOne({ name: name });
  res.send(Username);
});

// router.delete("/:name", async (req, res) => {
//   let { name } = req.params;
//   let Username = await User.delete({ name: name });
//   res.send(Username);
// });

module.exports = router