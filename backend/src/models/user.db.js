const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{type:String, unique:true}
})

module.exports = model('user', userSchema)