const express = require('express');
const router = express.Router();

const Games = require('../models/Games.model')
const Sports = require('../models/Sports.model')


router.get('/games', (req, res, next) => {
    Games.find()
        .then(allGames => res.json(allGames))
        .catch(err => console.log(err))
})

router.get('/sports', (req, res, next) => {
    Sports.find()
        .then(allSports => res.json(allSports))
        .catch(err => console.log(err))
})



module.exports = router;
