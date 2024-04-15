const { Router } = require('express')
const { crearTipo, consultarTipo, eliminarTipo, actualizarTipo } = require('../controllers/tipo')

const router = Router()

router.post('/', crearTipo)
router.get('/', consultarTipo),
router.delete('/',eliminarTipo)
router.put('/:id', actualizarTipo)




module.exports = router;