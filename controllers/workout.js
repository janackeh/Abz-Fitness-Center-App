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
const workoutApi = require('../models/workout.js')
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
const workoutRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
workoutRouter.get('/', (req, res) => {
  workoutApi.getAllWorkouts()
  .then((workouts) => {
    res.render('workouts/workouts', {workouts})
  }) 
.catch((err) => {
  res.send(err)
})
})

workoutRouter.post('/',(req, res) => {
  workoutApi.addNewWorkout(req.body)
  .then(() => {
  res.redirect('/workouts')
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

workoutRouter.get('/new', (req,res) => {
  res.render('workouts/newWorkoutForm')
})

workoutRouter.get('/:workoutId/edit', (req,res) => {
  workoutApi.getWorkout(req.params.workoutId)
  .then((workout) => {
    res.render('workouts/editWorkoutForm', {workout})
  })
  .catch(res.send)
})


workoutRouter.get('/:workoutId',(req,res) => {
  workoutApi.getWorkout(req.params.workoutId)
  .then((workout) => {
      res.render('workouts/workout' ,{workout})
  })
})

workoutRouter.put('/:workoutId', (req,res) => {
  workoutApi.updateWorkout(req.params.workoutId, req.body)
  .then(() => {
    res.redirect('/workouts')
  })
  .catch((err) => {
    res.send(err)
  })
})

workoutRouter.delete('/:workoutId', (req,res) => {
  console.log('delete route run')
  workoutApi.deleteWorkout(req.params.workoutId)
  .then(() => {
    res.redirect('/workouts')
  })
  .catch(res.send)
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  workoutRouter
}