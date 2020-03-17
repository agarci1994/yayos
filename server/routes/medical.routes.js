const express = require('express');
const router = express.Router();

/* ----- Models ----- */
const Appointment = require('../models/Appointment.model')


router.get('/all', (req, res, next) => {
        Appointment.find({
                        user: req.user._id
                })
                .then(response => res.json(response))
                .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
        Appointment.create({
                        description: req.body.description,
                        day: req.body.date,
                        time: req.body.time,
                        user: req.user
                })
                .then(response => res.json(response))
                .catch(err => next(err))
})


module.exports = router;