const Director = require('../models/director')
const { request, response } = require('express')

const crearDirector = async (req = request, res = response) => {

    const { nombres } = Director(req.body)

    try {
        const nombreDirector = await Director.findOne({ nombres })
        if (nombreDirector) {
            return res.status(400).json({ msj: 'Ya existe nombre' })
        }
        const datos = {
            nombres
        }
        const director = new Director(datos)
        await director.save()
        return res.status(201).json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

//consultar todos
const consultarDirector = async (req = request, res = response) => {

    try {
        Director.find()
            .then(data => {
                console.log(data)
                return res.status(201).json(data)
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const eliminarDirector= async (req = request, res = response) => {

    const { id } = req.body
    try {
        const director= await Director.findById(id)
        await Director.deleteOne({ _id: id })
        return res.status(201).json({ borrado: true, director })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }

}
const actualizarDirector = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const director=
            await Director.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(director)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}


module.exports = {
    crearDirector,
    consultarDirector,
    eliminarDirector,
    actualizarDirector
}