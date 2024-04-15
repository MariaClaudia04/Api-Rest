const Productora = require('../models/productora')
const { request, response } = require('express')

const crearProductora = async (req = request, res = response) => {

    const { nombre, descripccion, eslogan } = Productora(req.body)

    try {
        const nombreProductora = await Productora.findOne({ nombre })
        if (nombreProductora) {
            return res.status(400).json({ msj: 'Ya existe nombre' })
        }
        const datos = {
            nombre,
            descripccion,
            eslogan

        }
        const productora = new Productora(datos)
        await productora.save()
        return res.status(201).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const consultarProductora = async (req = request, res = response) => {

    try {
        Productora.find()
            .then(data => {
                console.log(data)
                return res.status(201).json(data)
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const eliminaProductora = async (req = request, res = response) => {

    const { id } = req.body
    try {
        const productora = await Productora.findById(id)
        await Productora.deleteOne({ _id: id })
        return res.status(201).json({ borrado: true, productora })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }

}
const actualizarProductora = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const productora =
            await Productora.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(productora)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}



module.exports = {
    crearProductora,
    consultarProductora,
    eliminaProductora, 
    actualizarProductora


}