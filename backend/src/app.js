const express = require('express')
const app = express()
const cors = require('cors')

//SETTINGS
 app.set('port', process.env.PORT || 3000)
//MIDDLEWARES
app.use(cors())
app.use(express.json())

//ROUTES
app.use('/api/room',require('./routes/room'))
app.use('/api/user',require('./routes/user'))
app.use('/api/story',require('./routes/story'))


module.exports = app

