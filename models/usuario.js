const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    correo: {
        type: String,
        required: true,
        unique: [true, 'el correo es obligatorio'],
    },

    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
    },
    estado: {
        type: Boolean,
        default: true,
    },
})

//******** Truco para modificar el objeto que devuelve la base de datos. Quitamos la versión y el password del usuario devuelto */
usuarioSchema.methods.toJSON = function () {
    const { __v, ...usuario } = this.toObject()

    return usuario
}

module.exports = model('Usuario', usuarioSchema)
