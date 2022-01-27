const { Router } = require('express')
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')
const validarJWT = require('../middlewares/validar-jwt')
const { obtenerTodosLosEquipos, obtenerEquipo } = require('../routes.controller/equipos.controller')

const router = Router()

router.get('/', validarJWT, obtenerTodosLosEquipos)

router.get(
    '/:id',
    [validarJWT, check('id', 'No es un identificador Mongo válido').isMongoId(), validarCampos],
    obtenerEquipo
)

module.exports = router
