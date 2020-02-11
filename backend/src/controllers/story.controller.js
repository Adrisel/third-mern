const storyctrl = {}
const Story = require('../models/story.db')

storyctrl.updateStory = async (req, res) => {
    const { name, score } = req.body
    await Story.findByIdAndUpdate(req.params.id, {
        punctuation: {
            name: name,
            score: score
        }
    })
    console.log()
    res.send('Story added a new punctuation')
}
storyctrl.postStory= (req, res) => {
    const {title,description,punctuation} =req.body
    const newStory = new Story({
        title,description,punctuation
    })
    console.log(newStory)
    console.log('story saved')
}
storyctrl.getStory = async(req, res) => {
                const story = await Story.findById(req.params.id)
                res.json(story)
    
    res.send('List Story') 
}

module.exports = storyctrl