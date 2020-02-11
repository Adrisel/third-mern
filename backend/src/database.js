const mongoose = require('mongoose')
const URI='mongodb://localhost/third-mern'


mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})

const connection=mongoose.connection
    connection.once('open',()=>{
    console.log(`dataBase opened`)
})
