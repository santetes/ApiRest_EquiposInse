const { request, response } = require('express')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token')
    if (!token) {
        return res.status(400).json({ msg: 'No existe token de autorización' })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY) //si el token no es válido, directamtente salta un throw error que captura el catch sin pasar entonces por next

        //Compruebo que aunque el token sea válido, busco al usuario y compruebo que no haya sido borrado de la base de datos
        const usuario = await Usuario.findOne({ _id: uid, estado: true })
        if (!usuario) {
            return res.status(400).json({ msg: 'Usuario borrado de la base de datos' })
        }
        //Introduzco en la petición el usuario para poder a continuación validar los roles de ese usuario si fuera necesário
        req.usuario = usuario

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ msg: 'token no válido' })
    }
}

module.exports = validarJWT
