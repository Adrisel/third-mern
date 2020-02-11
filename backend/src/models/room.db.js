const {Schema, model} = require('mongoose')

const roomSchema = new Schema({
    name:String,
    idRoom:String
})

module.exports = model('room',roomSchema)