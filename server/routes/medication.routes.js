const express = require('express');
const router = express.Router();
const Medication = require('../models/Medications.model')



router.get('/', (req, res, next) => {
    Medication.find()
        .then(allMedication => res.json(allMedication))
        .catch(err => console.log(err))
})


router.post('/new', (req, res, next) => {
    Coaster.create(req.body)
        .then(theCoaster => res.json(theCoaster))
        .catch(err => console.log(err))
})


module.exports = router;
