const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const dietAPIHandler = require('../services/dietAPIHandler')
const searchDiet = new dietAPIHandler()



router.post('/new', (req, res, next) => {
    console.log(req.user)
    console.log(req.body.diet)
    User.findOneAndUpdate(req.user, {
            diet: req.body.diet
        })
        .then(() => console.log("Actualizado"))
        .catch(err => console.log(err))
})

router.get('/main', (req, res, next) =>{
    console.log(req.user)
searchDiet.getRecipe("alcohol-free")
    .then(recipe => User.findOneAndUpdate(req.user, {recipe: {day1: {breakfast: recipe.data.hits[0].recipe.label}}}))
    .catch(err => console.log(err))
})
module.exports = router;