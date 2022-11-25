/**
 * Conexion con la base de datos
 */
require('./connection')

/**
 * Creacion de los esquemas y los casos de prueba
 */
require('./crud/create')

/**
 * Busqueda de todos los elementos
 */
setTimeout(() => {
    require('./crud/find')
}, 1500);

/**
 * Busqueda de un elemento por un criterio
 */
setTimeout(() => {
    require('./crud/findOne')
}, 2000);

/**
 * Eliminar todos los elementos o algunos segun un criterio
 */
//require('./crud/delete')