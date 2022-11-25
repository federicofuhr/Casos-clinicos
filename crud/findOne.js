require("../connection");

const Patient = require("../models/Patient");
const Medic = require("../models/Medic");
const Case = require("../models/ClinicCase");

async function getPatientByDni() {
  const patient = await Patient.findOne({dni: 37257130})
  console.log("Paciente Encontrado por DNI");
  console.log(patient)
}

async function getMedicByRegistrationNumber() {
  const medic = await Medic.findOne({registrationNumber: 123456})
  console.log("Medico encontrado por matricula");
  console.log(medic)
}

async function getClinicCaseByCaseNumber() {
  const clinicCase = await Case.findOne({caseNumber: 001})
  console.log("Caso clinico encontrado por numero de caso");
  console.log(clinicCase)
}

getPatientByDni()
getMedicByRegistrationNumber()
getClinicCaseByCaseNumber()