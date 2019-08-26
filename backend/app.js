const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require('./models/post');

const app = express();



mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://vlad:Mimosa2233@cluster0-gr4qp.mongodb.net/node-angular?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed..");
    });
    

    






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

// password:
// 8DLeCC0obEsGk4h3
// 136.179.9.130


// npm install --save body-parser
// actual posts requests here:
app.post("/api/posts", (req, res, next) => {
    // const post = req.body;

    // instead save to database:
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);    
    post.save();
    res.status(201).json({
        message:'Post added succesfully..'
    });
});

// actual get call are here:
app.get('/api/posts', (req, res, next) => {
    //res.send('Hello from the Express!');
    const posts = [
        { 
            id: 'asda123d', 
            title:"First server-side post",
            content: "This is coming from the server"
        },
        { 
            id: 'asda123e', 
            title:"Seond server-side post",
            content: "This is coming from the server"
        }
    ]
    res.status(200).json(
        {
            message: 'Posts fetched successfully!',
            posts: posts
        }
    );
});

module.exports = app;
