const { Schema, model, SchemaTypes } = require('mongoose')
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
    nombreGenero: {
        type: SchemaTypes.ObjectId,
        ref: 'genero',
        require: true
    },
    nombreDirector: {
        type: SchemaTypes.ObjectId,
        ref: 'director',
        require: true
    },
    nombreProductora: {
        type: SchemaTypes.ObjectId,
        ref: 'productora',
        require: true
    },
    nombreTipo: {
        type: SchemaTypes.ObjectId,
        ref: 'tipo',
        require: true
    }
})

module.exports = model("media", MediaSchema)
