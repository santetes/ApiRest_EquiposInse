const { request, response } = require('express')
const Equipo = require('../models/equipos')

const buscarEquipos = async (req = request, res = response) => {
    const { codigo, nombre, calibrado } = req.query
    const codigoNum = parseInt(codigo)
    const nombreRegex = new RegExp(nombre, 'i')

    let equipos = []

    if (codigo && !nombre && !calibrado) {
        equipos = await Equipo.find({ codigo: codigoNum })
    }
    if (!codigo && nombre && !calibrado) {
        equipos = await Equipo.find({
            $or: [
                { nombreEquipo: nombreRegex },
                { calibradorExterno: nombreRegex },
                { fabricante: nombreRegex },
                { modelo: nombreRegex },
            ],
        })
    }
    if (!codigo && !nombre && calibrado) {
        equipos = await Equipo.find({ equipoCalibrado: calibrado })
    }
    if (!codigo && nombre && calibrado) {
        equipos = await Equipo.find({ nombreEquipo: nombreRegex, equipoCalibrado: calibrado })
    }

    const numResultados = equipos.length

    res.json({
        msg: `mostrando ${numResultados} encontrado/s`,
        result: equipos,
    })
}

module.exports = buscarEquipos
