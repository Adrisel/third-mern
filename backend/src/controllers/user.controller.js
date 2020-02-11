const userctrl={}
const User = require('../models/user.db') 

userctrl.postUser=async(req,res)=>{
    const {name}= req.body
    const newUser=new User({name})
    await newUser.save()
    res.json({message:'usuar Added'})
}

module.exports = userctrl