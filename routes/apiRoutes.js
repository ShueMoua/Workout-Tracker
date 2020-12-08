const Workout = require("../models/Workout.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: body } },
            { new: true })
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            }).catch(err => {
                res.json(err);
            })

    });

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err);
            });
    });

}