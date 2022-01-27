const { Router } = require('express')
const { check } = require('express-validator')

const validarCampos = require('../middlewares/validar-campos')
const validarJWT = require('../middlewares/validar-jwt')
const buscarEquipos = require('../routes.controller/busqueda.controller')

const router = Router()

router.get('/', validarJWT, buscarEquipos)

module.exports = router
