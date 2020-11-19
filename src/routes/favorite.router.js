const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const favorite_controller = require('../controllers/favorite.controller')

router.get('/list', favorite_controller.list)
router.post('/create', favorite_controller.create)
router.put('/:id/update', favorite_controller.update)
router.delete('/:id/delete', favorite_controller.delete)

module.exports = router