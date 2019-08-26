const express = require('express');
const app = express();

app.use('/api/posts', (req, res, next) => {
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
