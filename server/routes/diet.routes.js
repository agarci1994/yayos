const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const dietAPIHandler = require('../services/dietAPIHandler')
const searchDiet = new dietAPIHandler()



router.post('/new', (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, {
            diet: req.body.diet
        })
        .then(x => console.log("Actualizado", x))
        .catch(err => console.log(err))
})

router.get('/main', (req, res, next) => {
    console.log("aqui si que entra")
    res.json({
        msg: "funciona"
    })
    // searchDiet.getRecipe(req.user.diet)
    //     .then(recipe => {
    //         let recipes = []
    //         for (let i = 0; i < 7; i++) {
    //             let breakfast = Math.floor(Math.random() * recipe.data.hits.length)
    //             let lunch = Math.floor(Math.random() * recipe.data.hits.length)
    //             let dinner = Math.floor(Math.random() * recipe.data.hits.length)
    //             let day = {
    //                 [i]: {
    //                     breakfast: {
    //                         name: recipe.data.hits[breakfast].recipe.label,
    //                         ingredients: recipe.data.hits[breakfast].recipe.ingredientLines
    //                     },
    //                     lunch: {
    //                         name: recipe.data.hits[lunch].recipe.label,
    //                         ingredients: recipe.data.hits[lunch].recipe.ingredientLines
    //                     },
    //                     dinner: {
    //                         name: recipe.data.hits[dinner].recipe.label,
    //                         ingredients: recipe.data.hits[dinner].recipe.ingredientLines
    //                     }
    //                 }
    //             }
    //             recipes.push(day)
    //         }
    //         return User.findByIdAndUpdate(req.user._id, {
    //             recipe: recipes
    //         })

    //     })
    //     .then(x => console.log(x))
    //     .catch(err => console.log(err))
})

module.exports = router;