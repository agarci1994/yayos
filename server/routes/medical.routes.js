const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment.model')


router.get('/all', (req, res, next) => {
    Appointment.find({user: req.user._id})
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
Appointment.create({description: req.body.description, day: req.body.date, user: req.user})
        .catch(err => console.log(err))
})


module.exports = router;