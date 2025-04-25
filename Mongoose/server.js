const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const User = require("./model/user");
// const blog = require("./model/blog");
const blogRoute = require("./routes/blogRoutes");
const userRoute = require("./routes/userRoutes");
app.use(express.json());

app.use("/blogs", blogRoute);
app.use("/users", userRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/g13mdb")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(4141, (req, res) => {
  console.log("Server is running on port 4141");
});
