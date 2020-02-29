const express = require('express');
const router = express.Router();
const Bills = require('../models/Bills.model')



router.get('/', (req, res, next) => {
    Bills.find()
        .then(allBills => res.json(allBills))
        .catch(err => console.log(err))
})


router.post('/new', (req, res, next) => {
    Bills.create(req.body)
        .then(theBill => res.json(theBill))
        .catch(err => console.log(err))
})


module.exports = router;
