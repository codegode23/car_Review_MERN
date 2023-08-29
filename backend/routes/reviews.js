//Require the express package
const express = require('express');

//create an instance of the router
const router = express.Router()


//get all reviews. 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all reviews'})
})

//get single review based on id
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single review based on id'})
})

//post/create a new review
router.post('/', (req, res) => {
    res.json({mssg: 'POST new review'})
})

//delete single review based on id
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE review based on id'})
})

//update single review based on id
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE review'})
})



//export the router
module.exports = router