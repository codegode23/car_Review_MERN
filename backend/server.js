//require dotenv package
require('dotenv').config()

//Require the express package
const express = require('express');

//require the mongoose package. this will help connect to the database

//require cars routes
const carRoutes = require('./routes/cars');
const { default: mongoose } = require('mongoose');

// const mongoose = require('mongoose');

//start the express app
const app = express();

//middleware
app.use(express.json()) //

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//request /api/cars to be able to access car routes
app.use('/api/cars',carRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)

//fire a function when the database is connected to the app
.then(() => {

//Listen for request, and display message if database connection successful
app.listen(process.env.PORT, () => {
    console.log('Connected to the database')

})

})

//catch errors when database connection is not successful
.catch((error) => {
    console.log(error)
})
