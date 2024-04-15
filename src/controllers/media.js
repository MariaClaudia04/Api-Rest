
const Media = require('../models/media')
const { request, reponse } = require('express')

const crearMedia = async (req = request, res = reponse) => {

    const { serial,
        titulo,
        sinopsis,
        urlPelicula,
        imagen,
        anoEstreno,
        nombreGenero,
        nombreDirector,
        nombreProductora,
        nombreTipo } = Media(req.body)

    try {
        const tituloMedia = await Media.findOne({ titulo })
        if (tituloMedia) {
            return res.status(400).json({ msj: ' Ya existe nombre' })

        }
        const datos = {
            serial,
            titulo,
            sinopsis,
            urlPelicula,
            imagen,
            anoEstreno,
            nombreGenero,
            nombreDirector,
            nombreProductora,
            nombreTipo,

        }
        console.log(datos)
        const media = new Media(datos)
        await media.save()
        return res.status(201).json(media)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const consultarMedia = async (req = request, res = response) => {

    try {
        Media.find()
            .then(data => {
                console.log(data)
                return res.status(201).json(data)
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

const eliminarMedia = async (req = request, res = response) => {

    const { id } = req.body
    try {
        const media = await Media.findById(id)
        await Media.deleteOne({ _id: id })
        return res.status(201).json({ borrado: true, media })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }

}
const actualizarMedia = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const media =
            await Media.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(media)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
module.exports = {
    crearMedia,
    consultarMedia,
    eliminarMedia,
    actualizarMedia

}
