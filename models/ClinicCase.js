const { Schema, model } = require('mongoose')

const Patient = require('./Patient')
const Medic = require('./Medic')

const clinicCaseSchema = new Schema({
    caseNumber: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    patient: {
        type: Patient,
        required: true
    },
    medics: {
       type: [Medic]
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = model('ClinicalCase', clinicCaseSchema);