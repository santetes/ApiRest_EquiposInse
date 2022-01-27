const { request, response } = require('express')
const Equipos = require('../models/equipos')

const obtenerTodosLosEquipos = async (req = request, res = response) => {
    const equipos = await Equipos.find({ estado: true }).sort({ codigo: 1 })
    res.status(200).json({ equipos })
}

const obtenerEquipo = async (req = request, res = response) => {
    const { id } = req.params
    const equipo = await Equipos.findById(id)
    if (!equipo) {
        return res.status(400).json({ msg: 'Equipo no encontrado en la base de datos' })
    }
    res.status(200).json({ equipo })
}

module.exports = {
    obtenerTodosLosEquipos,
    obtenerEquipo,
}
