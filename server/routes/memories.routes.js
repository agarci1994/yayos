const express = require('express');
const router = express.Router();
const User = require('../models/User.model')



router.post('/list', (req, res, next) => {
User.findOneAndUpdate(req.user, {
        memory: [req.body]
    })
    .then(() => console.log("Actualizado"))
    .catch(err => console.log(err))
})


module.exports = router;
