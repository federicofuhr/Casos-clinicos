/**
 * Conexion con la base de datos
 */
require('./connection')

/**
 * Creacion de los esquemas y los casos de prueba
 */

/*
const create = require('./crud/create')
create.createCases()
create.createMedics()
create.createPatients()
*/

/**
 * Busqueda de todos los elementos
 */
setTimeout(() => {
    const find = require('./crud/find')
    find.getPatients()
    find.getMedics()
    find.getCases()
}, 1500);

/**
 * Busqueda de un elemento por un criterio
 */
setTimeout(() => {
    const findOne = require('./crud/findOne')
    findOne.getClinicCaseByCaseNumber()
    findOne.getMedicByRegistrationNumber()
    findOne.getPatientByDni()
}, 2000);

/**
 * Actualizar un elemento manteniendo consistencia
 */
setTimeout(() => {
    const update = require('./crud/update')
    update.updateMedic()
    update.updatePatient()
}, 2500);

/**
 * Eliminar todos los elementos o algunos segun un criterio
 */
setTimeout(() => {
    const deleteCrud = require('./crud/delete')
    deleteCrud.deleteClinicCaseBy()
    deleteCrud.deleteMedicBy()
    deleteCrud.deletePatientBy()
}, 3000);