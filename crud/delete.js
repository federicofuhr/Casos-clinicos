require('../connection')

const Patient = require("../models/Patient")
const Medic = require("../models/Medic")
const ClinicCase = require("../models/ClinicCase")

const deletePatientBy = async () => {
    const result = await Patient.findOneAndDelete({dni: '38602822'})
}

const deleteMedicBy = async () => {
    const result = await Medic.findOneAndDelete({registrationNumber: '123654'})
}

const deleteClinicCaseBy = async () => {
    const result = await ClinicCase.findOneAndDelete({caseNumber: '1'})
}

const deletePatients = async () => {
    const result = await Patient.deleteMany()
}

const deleteMedics = async () => {
    const result = await Medic.deleteMany()
}

const deleteClinicCases = async () => {
    const result = await ClinicCase.deleteMany()
}

deletePatientBy()
deleteMedicBy()
deleteClinicCaseBy()
deletePatients()
deleteMedics()
deleteClinicCases()