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
 const weightLossApi = require('../models/weightloss.js')
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
const weightLossRouter = express.Router({mergeParams:true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
weightLossRouter.get('/', (req, res) => {
    weightLossApi.getAllWeightLosses()
  .then((weightlosses) => {
    res.render('weightlosses/weightlosses', {weightlosses})
  }) 
.catch((err) => {
  res.send(err)
})
})

weightLossRouter.post('/',(req, res) => {
  weightLossApi.addNewWeightLoss(req.body)
  .then(() => {
  res.redirect('/weightlosses')
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

weightLossRouter.get('/new', (req,res) => {
  res.render('weightlosses/newWeightLossForm')
})

weightLossRouter.get('/:weightLossId/edit', (req,res) => {
  weightLossApi.getWeightLoss(req.params.weightLossId)
  .then((weightloss) => {
    res.render('weightlosses/editWeightLossForm', {weightloss})
  })
  .catch(res.send)
})


weightLossRouter.get('/:weightLossId',(req,res) => {
  weightLossApi.getWeightLoss(req.params.weightLossId)
  .then((weightloss) => {
      res.render('weightlosses/weightloss' ,{weightloss})
  })
})

weightLossRouter.put('/:weightLossId', (req,res) => {
  weightLossApi.updateWeightLoss(req.params.weightLossId, req.body)
  .then(() => {
    res.redirect('/weightlosses')
  })
  .catch((err) => {
    res.send(err)
  })
})
weightLossRouter.delete('/:weightLossId', (req,res) => {
  console.log('delete route run')
  weightLossApi.deleteWeightLoss(req.params.weightLossId)
  .then(() => {
    res.redirect('/weightLosses')
  })
  .catch(res.send)
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  weightLossRouter
}