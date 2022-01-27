const deadLineCalibracion = (fechaCalibracion = Date, diasAntelacion = Number) => {
    const fechaFinCalibracion = Date.parse(fechaCalibracion)
    const diasAviso = diasAntelacion * 86400000
    const hoy = Date.parse(new Date())

    return fechaFinCalibracion - diasAviso < hoy ? true : false
}

module.exports = deadLineCalibracion
