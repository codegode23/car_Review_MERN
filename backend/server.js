//require dotenv package
require('dotenv').config()

//Require the express package
const express = require('express');

//require reviews routes
const reviewRoutes = require('./routes/reviews')

// const mongoose = require('mongoose');

//start the express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use(reviewRoutes)


//Listen for request, and display message if successful
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})
