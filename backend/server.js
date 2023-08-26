//require dotenv package
require('dotenv').config()

//Require the express package
const express = require('express');

// const mongoose = require('mongoose');

//start the express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//reacting to a request(Routes)
//get request. '/' specifies the root of the domain 4000. 
// req - request object, which has info about the request
// res - response object, used to send a response back to the browser or client
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome To Car Reviews'}) //sends back a json string to the client
})


//Listen for request, and display message if successful
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})
