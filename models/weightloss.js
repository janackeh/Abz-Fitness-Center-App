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
const WeightLossSchema = new mongoose.Schema ({

  createdAt: {
        type: Date,
        default: Date.now
    },
    
    notes: {
        type: String,
        required: false
    }, 
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */

 const WeightLossCollection = mongoose.model('weightloss', WeightLossSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllWeightLosses () {
    return WeightLossCollection.find()
}

function getWeightLoss (weightLossId) {
        return WeightLossCollection.findById(weightLossId)

}

function addNewWeightLoss (newWeightLoss) {
    return WeightLossCollection.create(newWeightLoss)

}

function updateWeightLoss (weightLossId, updateWeightLoss) {
    return WeightLossCollection.findByIdAndUpdate(weightLossId)

}

function deleteWeightLoss (weightLossId) {
    return WeightLossCollection.findByIdAndDelete(weightLossId)

}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getWeightLoss,
  getAllWeightLosses,
  addNewWeightLoss,
  updateWeightLoss,
  deleteWeightLoss
}