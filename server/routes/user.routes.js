const express = require('express');
const router = express.Router();
const Medication = require('../models/Medications.model')
const User = require('../models/User.model')


router.get('/user', (req, res, next) => {
    User.find()
        .then(response => res.json(response))
        .catch(err => console.log(err))
})


router.post("/update", (req, res, next) => {
    User.findByIdAndUpdate(req.body.id, {
            alergy: req.body.alergy,
            sick: req.body.sick,
            diet: req.body.diet
        }, {
            new: true
        })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

router.post("/add", (req, res, next) => {
    Medication.create({
            user: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity,
            quantityDay: req.body.quantityDay,
            price: req.body.price,
            description: req.body.description,
            hours: req.body.hours,
            day: req.body.day,
            color: req.body.colo

        })
        .then(response => res.json(response))
        .catch(err => console.log(err))
})


module.exports = router;