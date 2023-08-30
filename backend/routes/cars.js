//Import car model
const Car = require('../models/carModel');

//Require the express package
const express = require('express');

//create an instance of the router
const router = express.Router()


//get all cars. 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cars'})
})

//get single car based on id
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single car based on id'})
})

//post/create a new car
router.post('/', async (req, res) => {
    const {carName, price, purchaseDate} = req.body

    try {
        const car = await Car.create({carName, price, purchaseDate})
        res.status(200).json(car)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({mssg: 'POST new car'})
})

//delete single car based on id
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE car based on id'})
})

//update single car based on id
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE car'})
})



//export the router
module.exports = router