const { Schema, model } = require('mongoose')
const DirectorSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'Nombre director requerido'],
        minlength: 4
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
})

module.exports = model("director", DirectorSchema)