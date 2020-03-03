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

router.get('/main', (req, res, next) => {
    searchDiet.getRecipe(req.user.diet)
        .then(recipe => User.findOneAndUpdate(req.user, {
            recipe: {
                day1: {
                    breakfast: {
                        name: recipe.data.hits[0].recipe.label,
                        ingredients: recipe.data.hits[0].recipe.ingredientLines
                    },
                    lunch: {
                        name: recipe.data.hits[0].recipe.label,
                        ingredients: recipe.data.hits[0].recipe.ingredientLines
                    },
                    dinner: {
                        name: recipe.data.hits[0].recipe.label,
                        ingredients: recipe.data.hits[0].recipe.ingredientLines
                    }
                },
                day2: {
                    breakfast: {
                        name: recipe.data.hits[1].recipe.label,
                        ingredients: recipe.data.hits[1].recipe.ingredientLines
                    },
                    lunch: {
                        name: recipe.data.hits[1].recipe.label,
                        ingredients: recipe.data.hits[1].recipe.ingredientLines
                    },
                    dinner: {
                        name: recipe.data.hits[1].recipe.label,
                        ingredients: recipe.data.hits[1].recipe.ingredientLines
                    }
                },
                day3: {
                    breakfast: {
                        name: recipe.data.hits[2].recipe.label,
                        ingredients: recipe.data.hits[2].recipe.ingredientLines
                    },
                    lunch: {
                        name: recipe.data.hits[2].recipe.label,
                        ingredients: recipe.data.hits[2].recipe.ingredientLines
                    },
                    dinner: {
                        name: recipe.data.hits[2].recipe.label,
                        ingredients: recipe.data.hits[2].recipe.ingredientLines
                    }
                }
            }
        }))
        .catch(err => console.log(err))
})

module.exports = router;