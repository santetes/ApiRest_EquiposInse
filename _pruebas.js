//Archivo temporal para la realización de pruebas

const fechaString = '2022-02-05T22:00:00Z'

const fecha = new Date(fechaString)

const deadLineCalibracion = (fechaCalibracion, diasAntelacion) => {
    const fechaFinCalibracion = Date.parse(fechaCalibracion)
    const diasAviso = diasAntelacion * 86400000
    const hoy = Date.parse(new Date())

    return fechaFinCalibracion - diasAviso < hoy ? true : false
}

module.exports = deadLineCalibracion
