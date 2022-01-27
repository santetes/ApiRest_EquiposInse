const Equipo = require('../models/equipos')

const cargaBBDD_Mongo = async (dataAccess) => {
    dataAccess.forEach(async (e) => {
        const equipoObj = {
            codigo: e.codigo,
            nombreEquipo: e.nombreEquipo,
            periodoCalibracion: e.periodoCalibracion,
            calibradorExterno: e.calibradorExterno,
            fabricante: e.fabricante,
            modelo: e.modelo,
            fechaAlta: e.fechaAlta,
            fechaBaja: e.fechaBaja,
            fechaUltimaCal: e.fechaUltimaCal,
            fechaProximaCal: e.fechaProximaCal,
            datosTecnicos: e.datosTecnicos,
            rango: e.rango,
            errorActual: e.errorActual,
            errorMaxAdmisible: e.errorMaxAdmisible,
            equipoCalibrado: e.equipoCalibrado,
            iso17025: e.iso17025,
            ensayoIso17025: e.ensayoIso17025,
            coeficiente: e.coeficiente,
        }

        try {
            let equipo = new Equipo(equipoObj)
            await equipo.save()
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = cargaBBDD_Mongo
