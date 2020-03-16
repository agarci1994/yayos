const express = require('express');
const router = express.Router();

const centerAPIHandler = require('../services/centerAPIHandler')
const searchCenter = new centerAPIHandler()
const culturalAPIHandler = require('../services/culturalAPIHandler')
const searchCultural = new culturalAPIHandler()


router.get('/center', (req, res, next) => {
    searchCenter.getCenter()
        .then(center => res.json(center.data['@graph']))
        .catch(err => next(err))
})

router.get('/cultural', (req, res, next) => {
    searchCultural.getCultural()
        .then(cultural => res.json(cultural.data['@graph']))
        .catch(err => next(err))
})


module.exports = router;