const { Router } = require('express')
const { crearDirector, consultarDirector, actualizarDirector, eliminarDirector } = require('../controllers/director')

const router = Router()

router.post('/', crearDirector)
router.get('/', consultarDirector),
router.delete('/', eliminarDirector)
router.put('/:id',actualizarDirector)



module.exports = router;