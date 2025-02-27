const express = require("express");

const app = express();

app.use(m1)
// app.use(m3)
// app.use(m2)


//Running get on / path
app.get("/",(req,res)=>{
    console.log("Running get on '/' path")
    res.send("Home")
    
})

app.use(m3)
app.use(m2)
//If we run middleware at application level, it will run for every request 

//I only want to run the about page for m4 middleware...
app.get("/about",m4,(req,res)=>{
    console.log("Running get on '/about' path")
    res.send("About Page")
    
})
function m1(req,res,next) {
    console.log("Running MiddleWare 1")
    next()
    
}
function m2(req,res,next) {
    console.log("Running MiddleWare 2")
    next()
    
}

function m3(req,res,next){
    console.log("Running MiddleWare 3!")
    next()
}

function m4(req,res,next){
    console.log("Running  middleware 4")
    next()
}

app.listen(3106,()=>{
    console.log("Server is started...");
})