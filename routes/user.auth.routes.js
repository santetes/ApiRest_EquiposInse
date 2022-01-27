const { Router } = require('express')
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')
const googleSingIn = require('../routes.controller/user.auth.controller')

const router = Router()

router.post(
    '/',
    [check('id_token', 'Token de google es necesário').not().isEmpty(), validarCampos],
    googleSingIn
)

module.exports = router
