const { validarIdGoogle, generarJWT } = require('../helpers')
const Usuario = require('../models/usuario')

const googleSingIn = async (req = request, res = response) => {
    const { id_token } = req.body

    try {
        const { nombre, correo, img } = await validarIdGoogle(id_token)

        let usuario = await Usuario.findOne({ correo })

        if (!usuario) {
            usuario = new Usuario({
                nombre,
                correo,
                img,
                role: 'ADMIN_ROLE',
                google: true,
            })
            await usuario.save()
            return res.status(200).json({ msg: 'Usuario creado correctamente', usuario })
        }

        //Verificamos si el usuario aún estando en la bbdd su estado es false (borrado)
        if (!usuario.estado) {
            return res.status(400).json({ msg: 'Usuario no correcto - estado: false' })
        }
        //generar JWT
        const token = await generarJWT(usuario.id)
        res.json({ usuario, token })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg: 'Algo salió mal :(',
        })
    }
}

module.exports = googleSingIn
