const express = require('express');
const router = express.Router();

const User = require('../models/User.model')

router.post('/', (req, res, next) => {
    console.log(req.body.user)
    User.find({
            username: req.body.user
        })
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

module.exports = router;