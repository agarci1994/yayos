const express = require('express');
const router = express.Router();
const User = require('../models/User.model')



router.post('/new', (req, res, next) => {
    console.log(req.user)
    console.log(req.body.diet)
    User.findOneAndUpdate(req.user, {
            diet: req.body.diet
        })
        .then(() => console.log("Actualizado"))
        .catch(err => console.log(err))
})

router.get('/sports', (req, res, next) => {
    Sports.find()
        .then(allSports => res.json(allSports))
        .catch(err => console.log(err))
})



module.exports = router;