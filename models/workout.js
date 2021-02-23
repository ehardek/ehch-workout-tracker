const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
    exercises: [
      { 
        type: {
            type: String,
            trim: true,
            required: "What type of excerise are you doing?"
          },
        name: {
            type: String,
            trim: true,
            required: "What is the name of the excerise?"
        },
        duration:{
            type: Number,
            required: "Enter your duration"
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
           type: Number,
        },
        sets: {
            type: Number,
        }
      },
    ]});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
