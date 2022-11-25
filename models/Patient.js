const { Schema, model } = require('mongoose')

const patientSchema = new Schema({
    dni: {
        type: Number,
        unique: true,
        required: true
    },
    completeName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: new Date()
    },
    age: {
        type: Number
    },
    gender: {
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
    pathologies: {
        type: [String]
    }
})

module.exports = model('Patient', patientSchema);