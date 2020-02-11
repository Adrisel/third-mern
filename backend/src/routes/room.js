const {Router}=require('express')
const router = Router()
const {postRoom , getRoom}=require('../controllers/room.controller')

router.route('/')
.post(postRoom)
.get(getRoom)

module.exports = router