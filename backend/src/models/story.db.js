const {Schema, model}=require('mongoose')

const storySchema=new Schema({
    title:String,
    description: String,
    punctuation:[
        {
            name:String,
            score:Number
        }
    ]
})

module.exports = model('story',storySchema)