require("../connection");

const Patient = require("../models/Patient");
const Medic = require("../models/Medic");
const Case = require("../models/ClinicCase");

async function getCases() {
  const cases = await Case.find()
  console.log("Casos Clinicos:");
  console.log(cases);
}

async function getPatients() {
  const patients = await Patient.find()
  console.log("Pacientes:");
  console.log(patients);
}

async function getMedics() {
  const medics = await Medic.find()
  console.log("Medicos:");
  console.log(medics);
}

getPatients()
getMedics()
getCases()