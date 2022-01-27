const mongoose = require('mongoose')
require('colors')

const { lecturaBBDD_Access, cargaBBDD_Mongo } = require('../helpers')

const dbConexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('base de datos Online'.yellow)
    } catch (error) {
        console.log(error)
        throw new Error('error en la base de datos')
    }

    //BLOQUE DE CÓDIGO PARA LA LECTURA DE LA BASE DE DATOS ACCESS Y CARGA EN MONGO POR PRIMERA VEZ//

    //TO-DO - IMPLEMENTAR BORRADO BASE DE DATOS MONGO EN CADA REINICIO Y VUELTA A CARGAR

    /* const pathBaseDatos = './BBDD_Access/EQUIPOS_SEN.mdb'
    const dataAccess = await lecturaBBDD_Access(pathBaseDatos)
    try {
        await cargaBBDD_Mongo(dataAccess)
        console.log('Carga de la base de datos realizada'.green)
    } catch (error) {
        console.log(error)
    } */
}

module.exports = {
    dbConexion,
}
