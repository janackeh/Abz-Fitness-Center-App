/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


//  Step 2
//  *
//  * TODO: create model schema 
//  * NOTE: skip this if you are not using mongoose
//  *
const WorkoutSchema = new mongoose.Schema ({

  createdAt: {
        type: Date,
        default: Date.now
    },
    
    description: {
        type: String,
        required: true
    }, 

})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

 const WorkoutCollection = mongoose.model('workout', WorkoutSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllWorkouts () {
    return WorkoutCollection.find()
}

function getWorkout (workoutId) {
        return WorkoutCollection.findById(workoutId)

}

function addNewWorkout (newWorkout) {
    return WorkoutCollection.create(newWorkout)

}

function updateWorkout (workoutId, updateWorkout) {
    return WorkoutCollection.findByIdAndUpdate(workoutId)

}

function deleteWorkout (workoutId) {
    return WorkoutCollection.findByIdAndDelete(workoutId)

}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getWorkout,
  getAllWorkouts,
  addNewWorkout,
  updateWorkout,
  deleteWorkout
}