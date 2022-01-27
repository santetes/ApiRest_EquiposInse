const express = require('express')
const cors = require('cors')
const { dbConexion } = require('../dataBase/config')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Conectar a bbdd
        this.conectaDb()

        //Middlewares
        this.middlewares()
        //Rutas de mi aplicación
        this.routes()
    }

    conectaDb = async () => {
        await dbConexion()
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //Lectura y parseo del body
        //**Con este middleware le decimos que todo lo que viene en el cuerpo de las petciones Post/Put/delete va a ser JSON  */
        this.app.use(express.json())

        //Direcctorio Público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/auth', require('../routes/user.auth.routes'))
        this.app.use('/api/equipo', require('../routes/equipo.routes'))
        this.app.use('/api/busqueda', require('../routes/busqueda.routes'))
    }

    listen() {
        this.app.listen(this.port, () =>
            console.log(`A la escucha en el puerto ${this.port}`.magenta)
        )
    }
}

module.exports = Server
