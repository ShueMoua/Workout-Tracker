const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "This is required"
        },
        name: {
            type: String,
            trim: true,
            required: "This is required"
        },
        duration: {
            type: Number,
            required: "This is required"
        },
        weight: {
            type: Number,
            required: "This is required"
        },
        reps: {
            type: Number,
            required: "This is required"
        },
        sets: {
            type: Number,
            required: "This is required"
        },
        distance: {
            type: Number,
            required: "This is required"
        }
    }]
});

const WorkOuts = mongoose.model("WorkOuts", workoutSchema);

module.exports = WorkOuts;