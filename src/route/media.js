const { Router } = require('express')
const { crearMedia, consultarMedia, actualizarMedia, eliminarMedia } = require('../controllers/media')

const router = Router()

router.post('/', crearMedia)
router.get('/', consultarMedia),
router.put('/:id',actualizarMedia)
router.delete('/',eliminarMedia)


    module.exports = router;
