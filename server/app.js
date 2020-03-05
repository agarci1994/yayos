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

// app.use('/api/appointment', require('./routes/appointment.routes'))
// app.use('/api/bills', require('./routes/bills.routes'))
// app.use('/api/medication', require('./routes/medication.routes'))
// app.use('/api/training', require('./routes/training.routes'))

app.use((req, res) => {
    res.sendFile(_dirname + "/public/index.html")
})

module.exports = app;
