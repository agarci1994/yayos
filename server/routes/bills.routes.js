const express = require('express');
const router = express.Router();

const Bills = require('../models/Bills.model')



router.get('/all', (req, res, next) => {
    Bills.find({
            user: req.user._id
        })
        .then(allBills => res.json(allBills))
        .catch(err => console.log(err))
})

router.get('/delete', (req, res, next) => {
    Bills.findOneAndDelete(req._id)
        .then(x => console.log(x))
        .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
    Bills.create({
            dayPay: req.body.dayPay,
            type: req.body.type,
            user: req.user
        })
        .then(theBill => res.json(theBill))
        .catch(err => console.log(err))
})


module.exports = router;