const db = require("../models");
const path = require("path");
const mongoose = require("mongoose");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/stats.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
    });


    app.get("/api/workouts", (req, res) => {
        db.WorkOuts.find({}).sort({ day: -1 }).limit(1)
            .then(dbWorkOuts => {
                res.json(dbWorkOuts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);

        db.WorkOuts.create({})
            .then(dbWorkOuts => {
                res.json(dbWorkOuts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {

        db.WorkOuts.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, { $push: { exercises: [req.body] } }, { new: true }).then(dbWorkout => {
            res.json(dbWorkOuts);
        }).catch(err => {
            res.json(err);
        });

    });

    app.get("/api/workouts/range", (req, res) => {
        db.WorkOuts.find({})
            .then(dbWorkOuts => {
                res.json(dbWorkOuts);
            })
            .catch(err => {
                res.json(err);
            });
    });
};