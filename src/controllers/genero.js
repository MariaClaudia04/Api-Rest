const Genero = require('../models/genero')
const { request, response } = require('express')

const crearGenero = async (req = request, res = response) => {

    const { nombre, descripcion } = Genero(req.body)
    try {
        const generoDB = await Genero.findOne({ nombre })
        if (generoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre' })
        }
        const datos = {
            nombre,
            descripcion
        }
        const genero = new Genero(datos)
        await genero.save()
        return res.status(201).json(genero)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

const consultarGenero = async (req = request, res = response) => {

    try {
        Genero.find()
            .then(data => {
                console.log(data)
                return res.status(201).json(data)
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

const eliminarGenero = async (req = request, res = response) => {

    const { id } = req.body
    try {
        const genero = await Genero.findById(id)
        await Genero.deleteOne({ _id: id })
        return res.status(201).json({ borrado: true, genero })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }

}
const actualizarGenero = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const genero =
            await Genero.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(genero)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}


module.exports = {
    crearGenero,
    consultarGenero,
    eliminarGenero,
    actualizarGenero
}