const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./model/blog");
const blogRoute = require("./routes/blogRoutes");
const userRoute = require("./routes/userRoutes");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs");
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//Create a route to render Home Page....
app.get("/", (req, res) => {
  res.render("home", {
    name: "Sulabh",
    age: "23",
    followers: ["Sulabh", "Yudhi", "Tanish", "Yatish"],
  });
});


app.get("/addblog",(req,res)=>{
  res.render("addBlog")
})

app.use("/blogs", blogRoute);
app.use("/users", userRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/g13mdb")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(4141, (req, res) => {
  console.log("Server is running on port 4141");
});