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
router.post('/', (req, res) => {
    res.json({mssg: 'POST new car'})
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