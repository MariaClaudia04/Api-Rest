const { Router } = require('express')
const { crearProductora, consultarProductora, eliminaProductora, actualizarProductora } = require('../controllers/productora')

const router = Router()

router.post('/', crearProductora)
router.get('/', consultarProductora),
router.delete('/', eliminaProductora)
router.put('/:id', actualizarProductora)


module.exports = router;