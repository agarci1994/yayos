const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const dietAPIHandler = require('../services/dietAPIHandler')
const searchDiet = new dietAPIHandler()



router.post('/new', (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, {
            diet: req.body.diet
        }, {new: true})
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.get('/main', (req, res, next) => {
    searchDiet.getRecipe(req.user.diet)
        .then(recipe => {
            let recipes = []
            let breakfast, lunch, dinner, day
            for (let i = 0; i < 7; i++) {
                breakfast = Math.floor(Math.random() * recipe.data.hits.length)
                lunch = Math.floor(Math.random() * recipe.data.hits.length)
                dinner = Math.floor(Math.random() * recipe.data.hits.length)
                day = {
                    [i]: {
                        breakfast: {
                            name: recipe.data.hits[breakfast].recipe.label,
                            ingredients: recipe.data.hits[breakfast].recipe.ingredientLines
                        },
                        lunch: {
                            name: recipe.data.hits[lunch].recipe.label,
                            ingredients: recipe.data.hits[lunch].recipe.ingredientLines
                        },
                        dinner: {
                            name: recipe.data.hits[dinner].recipe.label,
                            ingredients: recipe.data.hits[dinner].recipe.ingredientLines
                        }
                    }
                }
                recipes.push(day)
            }
            return User.findByIdAndUpdate(req.user._id, {
                recipe: recipes
            })

        })
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

module.exports = router;