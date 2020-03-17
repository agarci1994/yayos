const express = require('express');
const router = express.Router();

/* ----- Models ----- */
const Medication = require('../models/Medications.model')


router.get('/', (req, res, next) => {
    Medication.find({user: req.user._id})
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/grandmother', (req, res, next) => {
    Medication.find({
            user: req.body.id
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/new', (req, res, next) => {
    Medication.create(req.body)
        .then(theMedication => res.json(theMedication))
        .catch(err => next(err))
})


module.exports = router;
