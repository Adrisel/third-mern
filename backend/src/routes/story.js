const { Router }=require('express')
const router = Router()
const {updateStory, getStory, postStory} = require('../controllers/story.controller')

router.route('/:id')
.put(updateStory)
.get(getStory)
router.route('/')
.post(postStory)
module.exports= router