const express = require("express");
const app = express()


// app.get("/profile",(req,res)=>{

//     const {username,age} = req.query;
//     console.log(username,age)
//     res.send("Profile Page of .... " + username + " " + age)
// })



// app.get("/profile/:username/:id",(req,res)=>{

//     const {username,id} = req.params;
//     console.log(username,id)
//     res.send("Profile Page of .... " + username + " "+ id) 
// })



let usersData = [
    {
        id : 1,
        name : "Sulabh",
        address : "Malout"
    },
    {
        id : 2,
        name : "Yatish",
        address : "Bathinda"
    },
    {
        id : 3,
        name : "Tanish",
        address : "Yamunanagar"
    },
    {
        id : 4,
        name : "Yudhi",
        address : "Sundarnagar"
    }
]

app.get("/users",(req,res)=>{
    res.send(usersData);
})

app.get("/getoneuser",(req,res)=>{
    const {id} = req.query;
    for(let i = 0 ; i < usersData.length;i++){
        if(usersData[i].id == id){
            return res.send(usersData[i]);
        }
    }
    res.send("User not found !")
})


app.listen(3456,()=>{
    console.log("server started !")
})



//Covert getoneuser in params;

//Create blogs data, create routes to send all blogs

//Create route to send one blog data using id

//Delete one blog 