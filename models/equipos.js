const { Schema, model } = require('mongoose')

const equipoSchema = new Schema({
    codigo: {
        type: Number,
    },
    nombreEquipo: {
        type: String,
    },
    periodoCalibracion: {
        type: Number,
    },
    calibradorExterno: {
        type: String,
    },
    fabricante: {
        type: String,
    },
    modelo: {
        type: String,
    },
    fechaAlta: {
        type: String,
    },
    fechaBaja: {
        type: String,
    },
    fechaUltimaCal: {
        type: String,
    },
    fechaProximaCal: {
        type: String,
    },
    datosTecnicos: {
        type: String,
    },
    rango: {
        type: String,
    },
    errorActual: {
        type: String,
    },
    errorMaxAdmisible: {
        type: String,
    },
    equipoCalibrado: {
        type: Boolean,
    },
    iso17025: {
        type: Boolean,
    },
    ensayoIso17025: {
        type: Boolean,
    },
    coeficiente: {
        type: String,
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true,
    },
})

equipoSchema.methods.toJSON = function () {
    const { __v, estado, ...data } = this.toObject()

    return data
}

module.exports = model('Equipo', equipoSchema)
