const express = require('express');
const router = express.Router();

const Medication = require('../models/Medications.model')


router.get('/', (req, res, next) => {
    Medication.find({user: req.user._id})
        .then(response => res.json(response))
        .catch(err => console.log(err))
})


router.post('/new', (req, res, next) => {
    Medication.create(req.body)
        .then(theMedication => res.json(theMedication))
        .catch(err => console.log(err))
})


module.exports = router;
