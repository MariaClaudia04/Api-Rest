const { Schema, model } = require('mongoose')
const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'serial unico'],
        unique: true
    },
    titulo: {
        type: String,
        required: [true, 'Nombre titulo requerido'],
        minlength: 1
    },
    sinopsis: {
        type: String,
    },
    urlPelicula: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    anoEstreno: {
        type: String,
        required: true
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'tipo',
        required: true
    }
})

module.exports = model("media", MediaSchema)