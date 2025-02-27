const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

let userdata = [];


app.get('/adduser', (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.post("/adduser",(req,res)=>{
    let {name,email,password} = req.body;
    userdata.push({name:name,email:email,password:password});
    console.log(userdata);
    res.send(userdata);
})

app.listen(3211, () => {
  console.log("Server is running on port 3211");
});