const Patient = require('../models/Patient');
const Medic = require('../models/Medic')
const ClinicCase = require('../models/ClinicCase')


/* Instanciando entidades */
const medicOne = new Medic({
    registrationNumber: 123456,
    completeName: "Fernando Fernandez",
    address: "Pellegrini 1050",
    phone: "555 444 54545",
    specialties: ["Cardiología"]
})

const medicTwo = new Medic({
    registrationNumber: 123654,
    completeName: "Gonzalo Gonzalez",
    address: "Avellaneda 556",
    specialties: ["Pediatría"]
})
const medicThree = new Medic({
    registrationNumber: 225123,
    completeName: "Juan Cruz Vega",
    address: "Calle 14 123",
    phone: "555 444 54545",
    specialties: ["Neurocirujano"]
})

const patientOne = new Patient({
    dni: 37257130,
    completeName: "Juan Ignacio Barthes",
    birthday: new Date(1994, 01, 06),
    age: 28,
    gender: "Hombre",
    address: "Avenida Colon 967",
    pathologies: ["Asma", "Anulo Mufa"],
})
const patientTwo = new Patient({
    dni: 38602822,
    completeName: "Mauro Valerioti",
    birthday: new Date(1994, 10, 28),
    age: 28,
    gender: "Hombre Fitness",
    address: "Colon 1269",
    pathologies: ["Basado", "Diabetico"],
    phone: "555 6969 555"
})

/* Funciones */

const createPatients = async () => {
    await patientOne.save()
    await patientTwo.save()
}

const createMedics = async () => {
    await medicOne.save()
    await medicTwo.save()
    await medicThree.save()
}


const createCases = async () => {
    const caseOne = new ClinicCase({
        caseNumber: 001,
        date: new Date(),
        patient: patientTwo,
        medics: [medicThree],
        description: "Descripcion de caso de prueba nro 001"
    })

    const caseTwo = new ClinicCase({
        caseNumber: 002,
        date: new Date(),
        patient: patientOne,
        medics: [medicOne, medicTwo],
        description: "Descripcion de caso de prueba nro 002"
    })

    await caseOne.save()
    await caseTwo.save()
}


module.exports = {
    createPatients,
    createMedics,
    createCases
}