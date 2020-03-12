const express = require('express');
const router = express.Router();

const User = require('../models/User.model')


router.get('/user', (req, res, next) => {
    User.find()
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

module.exports = router;