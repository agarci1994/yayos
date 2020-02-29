const express = require('express');
const router = express.Router();
const Memories = require('../models/Memories.model')


router.get('/', (req, res, next) => {
    Memories.find()
        .then(allMemories => res.json(allMemories))
        .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
    Coaster.create(req.body)
        .then(theCoaster => res.json(theCoaster))
        .catch(err => console.log(err))
})


module.exports = router;
