// Enviroment variables
require('dotenv').config();

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express()
      
// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)


// Base URLS
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/diet', require('./routes/diet.routes'))
app.use('/api/memory', require('./routes/memories.routes'))
app.use('/api/medication', require('./routes/medication.routes'))
app.use('/api/events', require('./routes/events.routes'))
app.use('/api/medical', require('./routes/medical.routes'))
app.use('/api/bills', require('./routes/bills.routes'))
app.use('/api/profile', require('./routes/profile.routes'))
app.use('/api/info', require('./routes/infoGrandmother.routes'))
app.use('/api/doctor', require('./routes/user.routes'))




app.use((req, res) => {
    res.sendFile(_dirname + "/public/index.html")
})

module.exports = app;
