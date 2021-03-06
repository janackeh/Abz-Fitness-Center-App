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
const MealSchema = new mongoose.Schema ({

  createdAt: {
        type: Date,
        default: Date.now
    },
    
    description: {
        type: String,
        required: true
    }, 

    imgLink: String,
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

 const MealCollection = mongoose.model('meal', MealSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllMeals () {
    return MealCollection.find()
}

function getMeal (mealId) {
        return MealCollection.findById(mealId)

}

function addNewMeal (newMeal) {
    return MealCollection.create(newMeal)

}

function updateMeal (mealId, newMeal) {
    return MealCollection.findByIdAndUpdate(mealId, newMeal)

}

function deleteMeal (mealId) {
    return MealCollection.findByIdAndDelete(mealId)

}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getMeal,
  getAllMeals,
  addNewMeal,
  updateMeal,
  deleteMeal
}