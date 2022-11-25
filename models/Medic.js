const { Schema, model } = require('mongoose')

const medicSchema = new Schema({
    registrationNumber: {
        type: Number,
        unique: true,
        required: true
    },
    completeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: "unknown"
    },
    phone: {
        type: String,
        default: "555-555-5555"
    },
    specialties: {
        type: [String]
    }
})

module.exports = model('Medic', medicSchema);