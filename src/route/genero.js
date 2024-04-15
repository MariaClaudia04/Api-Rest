const { Router } = require('express')
const { crearGenero, consultarGenero, eliminarGenero, actualizarGenero } = require('../controllers/genero')

const router = Router()

router.post('/', crearGenero)
router.get('/', consultarGenero),
router.delete('/', eliminarGenero)
router.put('/:id',actualizarGenero)



module.exports = router;