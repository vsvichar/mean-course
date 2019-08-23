const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middleware');
    res.send('Hello from the Express!');
});

module.exports = app;
