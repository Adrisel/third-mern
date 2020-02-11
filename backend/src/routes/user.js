const {Router}=require('express')
const router=Router()
const {postUser}=require('../controllers/user.controller')
router.route('/')
.post(postUser)

module.exports = router