const roomctrl = {}
const Room = require('../models/room.db') 

roomctrl.postRoom = async(req,res)=>{
    const {name, idRom} = req.body
    const newRoom = new Room({name, idRom})
    await newRoom.save()
    res.json({message: 'room saved'})
}
roomctrl.getRoom = async(req,res)=>{
    const  rooms = await Room.find()
    res.json(rooms)}

module.exports = roomctrl