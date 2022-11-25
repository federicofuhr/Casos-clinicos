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
        type: Patient.schema,
        required: true
    },
    medics: {
       type: [Medic.schema]
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = model('ClinicalCase', clinicCaseSchema);