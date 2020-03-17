const express = require('express');
const router = express.Router();

/* ----- Models ----- */
const User = require('../models/User.model')

router.post('/', (req, res, next) => {
    User.find({
            username: req.body.user
        })
        .then(user => res.json(user))
        .catch(err => next(err))
})

module.exports = router;