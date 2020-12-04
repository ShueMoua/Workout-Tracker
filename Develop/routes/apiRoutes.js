const db = require("../models");
const mongoose = require("mongoose");

module.exports = function (app) {

    db.Workouts.create({ name: "Workouts" })
        .then(dbWorkouts => {
            console.log(dbWorkouts)
        })
        .catch(({ message }) => {
            console.log(message);
        });


    app.get("/api/workouts", (req, res) => {
        db.Workouts.find({})
            .populate("exercises")
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body }, res) => {
        db.Excerises.create(body)
            .then(({ _id }) => db.Workouts.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });

    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Excerises.create(body)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workouts.find({})
            .populate("exercises")
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

}