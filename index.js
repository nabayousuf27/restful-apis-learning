const express = require("express");
const app = express();
const port = 8080;
//to use public and views folder
const path = require("path");

// Parse incoming request data
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"public")));

// Basic route
app.get("/",(req,res)=>{
    res.send("server working well");
})

app.listen(port , ()=> {
    console.log("listening on port 8080");
})
