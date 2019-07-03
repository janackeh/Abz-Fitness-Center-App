/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const mealApi = require('../models/meal.js')
// const weightlossApi = require('../models/weightloss.js')
// const workoutApi = require('../models/workout.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const mealRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
mealRouter.get('/', (req, res) => {
  mealApi.getAllMeals()
  .then((meals) => {
    res.render('meals/meals', {meals})
  }) 
.catch((err) => {
  res.send(err)
})
})

mealRouter.post('/',(req, res) => {
  mealApi.addNewMeal(req.body)
  .then(() => {
  res.redirect('/meals')
})
.catch((err) => {
  res.send(err)
})
})

// mealRouter.post('/:mealId/food', (req, res) => {
//   req.body.shopId = req.params.shopId
//   foodApi.addFood(req.body)
//       .then(() => {
//           res.send('Food item created')
//       })
// })

mealRouter.get('/new', (req,res) => {
  res.render('meals/newMealForm')
})

mealRouter.get('/:mealId/edit', (req,res) => {
  mealApi.getMeal(req.params.mealId)
  .then((meal) => {
    res.render('meals/editMealForm', {meal})
  })
  .catch(res.send)
})


// mealRouter.get('/:mealId',(req, res) => {
//   mealApi.getMeal(req.params.mealId)
//   .then((meal) => {
//     foodApi.getFoodByShopId(shop._id)
//       .then((food) => {
//         res.render('shops/singleShop', {shop, food})
//       }) 
//   })
// })

mealRouter.put('/:mealId', (req,res) => {
  mealApi.updateMeal(req.params.mealId, req.body)
  .then(() => {
    res.redirect('/meals')
  })
  .catch((err) => {
    res.send(err)
  })
})

mealRouter.delete('/:mealId', (req,res) => {
  console.log('delete route run')
  mealApi.deleteMeal(req.params.mealId)
  .then(() => {
    res.redirect('/meals')
  })
  .catch(res.send)
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  mealRouter
}
