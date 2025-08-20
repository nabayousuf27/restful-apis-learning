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

app.use(express.static(path.join(__dirname,"public")));

//temp array instead of databases
let posts = [
    {
        id:"1a",
        username:"naba yousuf",
        content :"i love coding"
    },
    {
        id:"2b",
        username:"saba",
        content :"i love cooking"
    },
    {
        id:"3c",
        username:"fatima",
        content :"i love travelling"
    }
];
//creating api
app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    // res.send(" post req working")
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let post = posts .find((p)=> id === p.id)
    console.log(post);
    res.send("req working");
});

app.listen(port , ()=> {
    console.log("listening on port 8080");
})
