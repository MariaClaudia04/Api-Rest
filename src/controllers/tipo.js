const Tipo = require('../models/tipo')
const { request, response } = require('express')

const crearTipo = async (req = request, res = response) => {

    const { nombre,descripccion } = Tipo(req.body)

    try {
        const nombreTipo = await Tipo.findOne({ nombre })
        if (nombreTipo) {
            return res.status(400).json({ msj: 'Ya existe nombre' })
        }
        const datos = {
            nombre,
            descripccion
            
        }
        const tipo = new Tipo(datos)
        await tipo.save()
        return res.status(201).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const consultarTipo= async (req = request, res = response) => {

    try {
        Tipo.find()
            .then(data => {
                console.log(data)
                return res.status(201).json(data)
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const eliminarTipo = async (req = request, res = response) => {

    const { id } = req.body
    try {
        const tipo = await Tipo.findById(id)
        await Tipo.deleteOne({ _id: id })
        return res.status(201).json({ borrado: true,tipo  })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const actualizarTipo = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const tipo =
            await Tipo.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(tipo)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}



module.exports = {
    crearTipo,
    consultarTipo,
    eliminarTipo,
    actualizarTipo
}