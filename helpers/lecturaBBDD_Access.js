const ADODB = require('node-adodb')

const lecturaBBDD_Access = async (path) => {
    const connection = ADODB.open(`Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${path};`)

    let arrayData = []

    const data = await connection.query('SELECT * FROM [Equipos de medida]')

    data.forEach((e) => {
        let arrayTempValores = Object.values(e)
        const object = {
            codigo: arrayTempValores[0],
            nombreEquipo: arrayTempValores[1],
            indGrupo: arrayTempValores[2],
            periodoCalibracion: arrayTempValores[3],
            calibradorExterno: arrayTempValores[4],
            fabricante: arrayTempValores[5],
            modelo: arrayTempValores[6],
            fechaAlta: arrayTempValores[7].split('-')[0] === '1970' ? null : arrayTempValores[7],
            fechaBaja: arrayTempValores[8].split('-')[0] === '1970' ? null : arrayTempValores[8],
            codigoUbicacion: arrayTempValores[9],
            fechaUltimaCal:
                arrayTempValores[10].split('-')[0] === '1970' ? null : arrayTempValores[10],
            fechaProximaCal:
                arrayTempValores[11].split('-')[0] === '1970' ? null : arrayTempValores[11],
            datosTecnicos: arrayTempValores[12],
            rango: arrayTempValores[13],
            errorActual: arrayTempValores[14],
            errorMaxAdmisibre: arrayTempValores[15],
            equipoCalibrado: arrayTempValores[16],
            iso17025: arrayTempValores[17],
            ensayoIso17025: arrayTempValores[18],
            propietario: arrayTempValores[19],
            coeficiente: arrayTempValores[20],
        }

        arrayData.push(object)
    })

    return arrayData
}

module.exports = lecturaBBDD_Access
