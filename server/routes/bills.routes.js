const express = require('express');
const router = express.Router();

/* ----- Models ----- */
const Bills = require('../models/Bills.model')



router.get('/all', (req, res, next) => {
    Bills.find({
            user: req.user._id
        })
        .then(allBills => res.json(allBills))
        .catch(err => next(err))
})

router.get('/delete', (req, res, next) => {
    Bills.findOneAndDelete(req._id)
        .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
    Bills.create({
            dayPay: req.body.dayPay,
            type: req.body.type,
            user: req.user
        })
        .then(theBill => res.json(theBill))
        .catch(err => next(err))
})


module.exports = router;