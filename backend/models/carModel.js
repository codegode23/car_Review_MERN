//require mongoose
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const carSchema = new Schema({
    carName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    purchaseDate: {
        type: String,
        required: false
    }

}, { timestamps: true })

module.exports = mongoose.model('Car', carSchema)