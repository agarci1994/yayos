const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment.model')




router.get('/', (req, res, next) => {
    Appointment.find()
        .then(allAppointment => res.json(allAppointment))
        .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
    Appointment.create(req.body)
        .then(theAppointment => res.json(theAppointment))
        .catch(err => console.log(err))
})



module.exports = router;
