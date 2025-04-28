const express = require("express");
const router = express.Router();
const blog = require("../model/blog");



router.post("/", async (req, res) => {
  let { title, content, author } = req.body;
  let newBlog = new blog({
    title: title,
    content: content,
    author: author,
  });
  await newBlog.save();
  res.redirect("/")
});

router.get("/", async (req, res) => {
  let allblogs = await blog.find();
  res.render("blog",{
    blogs:allblogs,
  })
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let oneblog = await blog.findById(id);
  res.render("oneblog",{
    title:oneblog.title,
    content:oneblog.content,
    author:oneblog.author
  })
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  await blog.findByIdAndDelete(id);
  res.send("Blog Deleted!");
});

router.get("/blogpage",(req,res)=>{
  res.render("blog",{
    title:"First Blog",
    content:"This is the newest blog on the page.."
  })
})

router.put("/:id", async (req, res) => {
  let { id } = req.params;
  let Blog = await blog.findById(id);
  let { title, content, author } = req.body;
  Blog.title = title;
  Blog.content = content;
  Blog.author = author;

  await Blog.save();
  res.send(Blog);
});

module.exports = router;
