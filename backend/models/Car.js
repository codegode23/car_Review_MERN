//require mongoose
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    puchaseDate: {
        type: String,
        required: false
    }

}, { timestamps: true })

// car_id bigserial [pk]
// car_name varchar
// Car_number varchar
// Price bigint [not null, note: 'must be positive']
// Date Purchased text
