require("../connection");

const Patient = require("../models/Patient");
const Medic = require("../models/Medic");
const ClinicCase = require("../models/ClinicCase");

async function updatePatient() {
  const patient = await Patient.update({dni: 37257130},{
    phone: '2266445564'
  });
  const updatedPatient = await Patient.findOne({dni: 37257130})
  console.log("Paciente luego de actualizar su numero de telefono");
  console.log(updatedPatient)
}


async function updateMedic() {
  const medic = await Medic.update({registrationNumber: 123456},{
    address: 'Avenida España 600'
  });
  const updatedMedic = await Medic.findOne({registrationNumber: 123456})
  console.log("Medico luego de actualizar su direccion");
  console.log(updatedMedic)
  

  const clinicCase = await ClinicCase.find({"medics.registrationNumber": 123456})
  console.log("clinicCase impreso");
  console.log(clinicCase);
  
  clinicCase.forEach(async (c) => {
    console.log("Medico luego de actualizar su direccion (dentro de foreach)");
    console.log(updatedMedic)
    await ClinicCase.update({caseNumber: c.caseNumber}, {
      $pull: {
        medics: {registrationNumber: updatedMedic.registrationNumber}
      }
    })

    await ClinicCase.update({caseNumber: c.caseNumber}, {
      $push: {
        medics: updatedMedic
      }
    })
  });
}

updatePatient()
updateMedic()